import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Client from '../../screens/Client';
import ListOfClients from '../../components/ListOfClients';
import FormClients from '../../components/FormClients';
import EditClient from '../../components/EditClient';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Client} />
      <Stack.Screen name="ListOfClients" component={ListOfClients} />
      <Stack.Screen name="AddClient" component={FormClients} />
      <Stack.Screen name="EditClient" component={EditClient} />
    </Stack.Navigator>
  )
}

export default HomeStack
