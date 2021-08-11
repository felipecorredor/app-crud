import React, { useState, useEffect } from 'react';
// Apollo CLIENT
import { GET_CLIENTS } from '../../Queries';
import { useQuery } from '@apollo/client';
import { Loading } from '../Loading';
import { View, FlatList, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemClient from './ItemClient'
import { Icon } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';

const ListOfClients = ({ navigation }) => {
  const [clients, setClients] = useState([])
  const [page, setPage] = useState(0)
  let term = ""
  let perPage = 30
  const isFocused = useIsFocused();
  // Query @apollo/client
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    variables: { page, term, perPage },
  });

  useEffect(() => {
    setClients(data ? data.clientsSearch.results : [])
  }, [data, setClients, isFocused])

  const closeSesion = async () => {
    try {
      await AsyncStorage.removeItem("@token");
      navigation.navigate('Home')
      return true;
    }
    catch (exception) {
      return false;
    }
  }

  if (loading) return <Loading isVisible={true} text="Cargando..." />
  if (error) return <Text>{error}</Text>

  return (
    <View>
      <FlatList data={clients}
        renderItem={(client) => <ItemClient client={client} navigation={navigation} />}
        keyExtractor={(_, index) => index.toString()}
      />
      <Icon type="material-community"
        name="plus"
        reverse
        color="#00a680"
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate('AddClient')} />
    </View>
  )
}

export default ListOfClients

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5
  }
})