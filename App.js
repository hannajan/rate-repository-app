import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import theme from './src/theme'

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.textPrimary
  }
};

const App = () => {

  return (
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <PaperProvider theme={paperTheme}>
              <Main />
            </PaperProvider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
  );
};

export default App;
