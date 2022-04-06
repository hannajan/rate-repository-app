import { gql } from '@apollo/client';
import { REPO_INFO } from './fragments'

export const GET_REPOSITORIES = gql`
  query {
  repositories {
    edges {
      node {
        ...RepositoryInfo
      }
    }
  }
}
${REPO_INFO}
`