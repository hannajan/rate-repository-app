import { useMutation } from '@apollo/client';

import { CREATE_REVIEW, DELETE_REVIEW } from '../graphql/mutations';
import { GET_CURRENT_USER } from '../graphql/queries';

const useReview = () => {

  const [createReviewMutation, result] = useMutation(CREATE_REVIEW, {
    refetchQueries: [ { query: GET_CURRENT_USER, variables: { includeReviews: true } } ]
  }) ;
  const [deleteReviewMutation] = useMutation(DELETE_REVIEW, {
    refetchQueries: [ { query: GET_CURRENT_USER, variables: { includeReviews: true } } ]
  });

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const variables = { review: { ownerName, repositoryName, rating, text }}

    const { data } = await createReviewMutation({ variables })

    return data.createReview;
  }

  const deleteReview = async ({ id }) => {
    const variables = { deleteReviewId: id }
    const { data } = await deleteReviewMutation({ variables })

    return data.deleteReview;
  }

  return {createReview, deleteReview, result};
};

export default useReview;