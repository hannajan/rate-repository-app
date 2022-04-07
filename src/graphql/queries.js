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

export const GET_REPOSITORY = gql`
  query Query($repositoryId: ID!) {
  repository(id: $repositoryId) {
    ...RepositoryInfo
    url
  }
}
${REPO_INFO}
`

export const GET_CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`