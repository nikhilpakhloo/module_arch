import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from './common/providers'

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <ThemeProvider>
        <AppNavigator/>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

export default App
