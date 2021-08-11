import React from 'react'
import { Text } from 'react-native'
import { useForm } from "react-hook-form";

// CUSTOM HOOKS
import { CreateHook } from '../../customHooks/CreateHook';
import { Loading } from '../Loading';
import { ContainerInputs } from '../../widgets/addClient/ContainerInputs';

const FormClients = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, register } = useForm();
  const { create, loading, error } = CreateHook(navigation)

  const onSubmit = data => {
    const address = {
      streetAddress: data.address,
      // city: data.city,
      // cityId: 1,
      // stateId: 1
    }
    delete data.city
    const newData = { ...data, address }
    create(newData)
  }

  if (loading) return <Loading isVisible={true} text="Cargando..." />
  if (error) return <Text>{error}</Text>

  return (
    <ContainerInputs control={control}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      register={register}
      />
  )
}

export default FormClients

