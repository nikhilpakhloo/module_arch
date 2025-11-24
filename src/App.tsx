import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from './common/providers'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App
