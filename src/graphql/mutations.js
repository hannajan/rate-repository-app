import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation ($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      createdAt
      rating
      text
      repositoryId
      user {
        username
      }
    }
  }
`