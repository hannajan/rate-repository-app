import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawToken = await AsyncStorage.getItem(
      `${this.namespace}:repoAppUserToken`,
    );
  
    return rawToken ? JSON.parse(rawToken) : [];
  }
  
  async setAccessToken(token) {
    await AsyncStorage.setItem(
      `${this.namespace}:repoAppUserToken`,
      JSON.stringify(token),
    );
  }
  
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:repoAppUserToken`)
  }  
}


export default AuthStorage;