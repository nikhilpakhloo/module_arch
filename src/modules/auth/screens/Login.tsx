import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch } from '../../../common/hooks';

const Login = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})