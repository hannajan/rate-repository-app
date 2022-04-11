import { gql } from '@apollo/client';

export const REPO_INFO = gql`
  fragment RepositoryInfo on Repository {
        id
        ownerAvatarUrl
        fullName
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        url
  }
`