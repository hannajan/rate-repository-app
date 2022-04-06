import { useMutation } from '@apollo/client';
import { useState } from 'react';

import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [credentials, setCredentials] = useState();
  const [signInWithCredentials, result] = useMutation(SIGN_IN, {
    variables: { credentials },
  });

  const signIn = async ({ username, password }) => {
    setCredentials({ username, password });
    const result = await signInWithCredentials({credentials});
    setCredentials();

    return result.data ? result : {};
  };

  return [signIn, result];
};

export default useSignIn;