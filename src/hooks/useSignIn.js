import { useMutation } from '@apollo/client';
import { useState } from 'react';
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [credentials, setCredentials] = useState();
  const [signInWithCredentials, result] = useMutation(SIGN_IN, {
    variables: { credentials },
  });

  const signIn = async ({ username, password }) => {
    setCredentials({ username, password });
    const { data } = await signInWithCredentials({credentials});
    setCredentials();
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;