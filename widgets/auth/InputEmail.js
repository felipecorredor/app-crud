import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Controller } from "react-hook-form";
import { Icon, Input } from 'react-native-elements';

export const InputEmail = ({ errors, register, control }) => {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            type="number"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Add your cellphone"
            containerStyle={styles.inputForm}
            rightIcon={
              <Icon type="material-community"
                name="at"
                iconStyle={styles.iconRight}
              />
            }
          />
        )}
        name="cellphone"
        rules={{ required: true }}
      />
      {errors.cellphone && <Text>{errors.cellphone.message}.</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  inputForm: {
    width: '100%',
    marginTop: 20
  },
  iconRight: {
    color: '#c1c1c1',
  }
})