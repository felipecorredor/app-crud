import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { Controller } from "react-hook-form";
import { Input } from 'react-native-elements';

export const InputWidget = ({ placeholder, name, control, errors, register, defaultValue }) => {

  console.log("defaultValue", defaultValue)

  return (
    <>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input placeholder={placeholder}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...register(`${name}` )}
          />
        )}
        name={name}
        defaultValue={defaultValue ?? ''}
      />
      {name === "restaurantName" && errors.restaurantName && <Text style={styles.error}>This field is required.</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  error: {
    color: '#a60b0b',
    marginLeft: 10,
  }
})