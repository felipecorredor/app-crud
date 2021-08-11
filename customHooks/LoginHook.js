import { useCallback } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../Mutations'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginHook = (navigation) => {
  // Graphql Query
  const [login, { loading, error }] = useMutation(LOGIN);

  // Function
  const loginUSer = useCallback((data) => {
    login({ variables: { cellphone: data.cellphone, password: data.password } })
      .then((response) => {
        AsyncStorage.setItem('@token', response.data.login.token)
        navigation.navigate("ListOfClients")
      })
      .catch((error) => {
        console.error(error)
      })
  }, [login, navigation])

  return { loginUSer, loading, error }
}
