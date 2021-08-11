import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Controller } from "react-hook-form";
import { Icon, Input } from 'react-native-elements';

export const InputPassword = ({ placeholder, name, errors, control, error }) => {
  const [showPassword, setShowPassword] = useState(true)
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder={placeholder}
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={showPassword}
            rightIcon={
              <Icon type="material-community"
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                iconStyle={styles.iconRight}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
        )}
        name={name}
        rules={{ required: true }}
        defaultValue=""
      />
      { errors.password && <Text>Ingresa tu contraseña.</Text> }
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