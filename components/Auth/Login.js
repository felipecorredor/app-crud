import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { InputPassword } from '../../widgets/auth/InputPassword';
import { InputEmail } from '../../widgets/auth/InputEmail';
import { useForm } from "react-hook-form";
import { LoginHook } from '../../customHooks/LoginHook';
import { Loading } from '../Loading';

const Login = ({ navigation }) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const { loginUSer, loading, error } = LoginHook(navigation)

  const onSubmit = data => {
    loginUSer(data)
  }

  if (loading) return <Loading isVisible={true} text="Cargando..." />

  return (
    <View style={styles.formContainer}>
      <InputEmail errors={errors}
        register={register}
        control={control} />

      <InputPassword placeholder="Ingresar contraseña"
        name="password"
        errors={errors}
        control={control} />

      <Button title="Iniciar sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={handleSubmit(onSubmit)} />

    </View>
  )
}

export default Login


const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: '95%'
  },
  btnLogin: {
    backgroundColor: '#00a680'
  }
})