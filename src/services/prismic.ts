export const repoName = 'ignews'

export const apiEndpoint = process.env.PRISMIC_APP_URL

export const accessToken = process.env.PRISMIC_ACESS_PERMANENT_TOKEN


export const linkResolver = (doc) => {
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }
    return '/'
}