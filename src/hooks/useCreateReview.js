import { useMutation } from '@apollo/client';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {

  const [createReviewMutation, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const variables = { review: { ownerName, repositoryName, rating, text }}

    const { data } = await createReviewMutation({ variables })

    return data.createReview;
  }

  return [createReview, result];
};

export default useCreateReview;