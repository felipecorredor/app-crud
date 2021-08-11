import { useCallback } from 'react'
import { CREATE_CLIENT } from '../Mutations'
import { useMutation } from '@apollo/client';

export const CreateHook = (navigation) => {
  // Graphql Query
  const [createClient, { loading, error }] = useMutation(CREATE_CLIENT);
  // Function
  const create = useCallback((data) => {
    createClient({ variables: { input: data } })
      .then((response) => {
        navigation.navigate('Home')
      })
  }, [createClient, navigation])

  return { create, loading, error }
}