import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const [signUp, result] = useMutation(CREATE_USER);

  const createUser = async ({ username, password }) => {
    const variables = { user: { username, password }}
    const { data } = await signUp({ variables })

    return data.createUser;
  }

  return [createUser, result];
};

export default useSignUp;