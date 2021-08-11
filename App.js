import React from 'react';
import { Navigation } from './app/Navigation/Navigation';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  )
}

export default App

// AppRegistry.registerComponent('App', () => App);
