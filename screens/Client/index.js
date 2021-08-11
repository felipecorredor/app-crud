import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Loading } from '../../components/Loading'
import ListOfClients from '../../components/ListOfClients'
import Login from '../../components/Auth/Login'

const Client = ({ navigation }) => {
  const [login, setLogin] = useState(null)

  useEffect(() => {
    async function getToken(){
      try {
        const value = await AsyncStorage.getItem('@token')
        if (value !== null) {
          value ? setLogin(true) : setLogin(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getToken()
  }, [setLogin])

  return login ? <ListOfClients navigation={navigation} /> : <Login navigation={navigation} />

}

export default Client
