import React from 'react'
import { ContainerInputs } from '../../widgets/addClient/ContainerInputs';
import { EditHook } from '../../customHooks/EditHook'
import { Loading } from '../Loading';
import { useForm } from "react-hook-form";

const EditClient = ({ route: { params }, navigation }) => {
  const { control, handleSubmit, formState: { errors }, register } = useForm();
  const { edit, loading, error } = EditHook(navigation)

  const onSubmit = data => {
    const address = {
      streetAddress: data.address,
      // city: data.city,
      // cityId: 1,
      // stateId: 1
    }
    delete data.city
    const newData = { ...data, address }
    edit(params.id, newData)
  }

  if (loading) return <Loading isVisible={true} text="Cargando..." />
  if (error) return <Text>{error}</Text>

  return (
    <ContainerInputs control={control}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      register={register}
      client={params.client}
    />
  )
}

export default EditClient
