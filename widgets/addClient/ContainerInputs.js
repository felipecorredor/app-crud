import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { InputWidget } from './InputWidget';
import { Button } from 'react-native-elements'

export const ContainerInputs = ({ control, handleSubmit, errors, register, client }) => {

  return (
    <View style={styles.viewForm}>

      <InputWidget placeholder="Add your firstName"
        name="firstName"
        control={control}
        errors={errors}
        register={register}
        defaultValue={client ? client.firstName : '' }
        />

      <InputWidget placeholder="Add your lastName"
        name="lastName"
        control={control}
        errors={errors}
        register={register}
        defaultValue={client ? client.lastName : '' } />

      <InputWidget placeholder="Add your cellphone"
        name="cellphone"
        control={control}
        errors={errors}
        register={register}
        defaultValue={client ? client.cellphone : '' }
        />

      <Text style={styles.addressInfo}>Address Info</Text>

      <InputWidget placeholder="Add your address"
        name="address"
        control={control}
        errors={errors}
        register={register}
        defaultValue={client ? client.addres : '' }/>

      <InputWidget placeholder="Add your city"
        name="city"
        control={control}
        errors={errors}
        register={register} />

      <Button title="Send"
        onPress={handleSubmit}
        buttonStyle={styles.btnClient} />

    </View>
  )
}


const styles = StyleSheet.create({
  viewForm: {
    marginLeft: 10,
    marginRight: 10
  },
  btnClient: {
    backgroundColor: '#00a680',
    margin: 20
  },
  addressInfo: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 20
  }
})