import Prismic from '@prismicio/client'
import {
    apiEndpoint,
    accessToken
  } from './prismic'
export const Client = (req = null) => (
    Prismic.client(apiEndpoint, {req, accessToken})
  );
  