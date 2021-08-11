import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const ItemClient = ({ client: { item }, navigation }) => {

  const { address, cellphone, firstName, lastName } = item

  const goClient = () => {
    navigation.navigate('EditClient', {
      id: item.id,
      client: item
    })
  }

  return (
    <TouchableOpacity onPress={goClient}>
      <View style={styles.viewClient}>
        <View>
          <Text style={styles.ClientName}>{firstName} {lastName} </Text>
          <Text style={styles.ClientAddress}>{cellphone}</Text>
          <Text style={styles.ClientDescription}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemClient



const styles = StyleSheet.create({
  viewClient: {
    flexDirection: 'row',
    margin: 10
  },
  ClientName: {
    fontWeight: 'bold',
  },
  ClientAddress: {
    paddingTop: 2,
    color: '#c2c2c2'
  },
  ClientDescription: {
    paddingTop: 2,
    color: '#c2c2c2',
    width: 300
  }
})