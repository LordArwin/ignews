import { query } from "faunadb"
import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { fauna } from "../../../services/fauna"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
  callbacks:{
    async signIn(user){
      try{
        const {email} = user        
        fauna.query(
          query.If(
            query.Not(
              query.Exists(
                query.Match(
                  query.Index('email_index'),
                  query.Casefold(email)
                )
              )
            ),
            query.Create(
              query.Collection('users'),
              { data : {email}}
            ),
            query.Get(
              query.Match(
                query.Index('email_index'),
                query.Casefold(email)
              )
            )
          )
        )
        return true
      }catch{
        return false
      }

    }
  }
})