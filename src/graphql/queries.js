import { gql } from '@apollo/client';
import { REPO_INFO } from './fragments'

export const GET_REPOSITORIES = gql`
  query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
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