import { useCallback } from 'react'
import { UPDATE_CLIENT } from '../Mutations';
import { useMutation } from '@apollo/client';

export const EditHook = (navigation) => {
  // Graphql Query
  const [updateClient, { loading, error }] = useMutation(UPDATE_CLIENT);
  // Function
  const edit = useCallback((id, data) => {
    updateClient({ variables: { id, input: data } })
    .then(response => {
      // Update setClients with the response of graphql
      navigation.navigate('Home')
    })
  }, [updateClient, navigation])
  return { edit, loading, error }
}