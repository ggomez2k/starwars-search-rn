import React, { Component } from 'react'
import AppNavigator from './AppNavigator'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeContext, getTheme } from 'react-native-material-ui'
import { setCustomText } from 'react-native-global-props'
import { store } from './reducers'
import uiTheme from './themes/Default'

const customTextProps = {
  style: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#383838'
  }
}

export default class App extends Component {
  componentDidMount () {
    setCustomText(customTextProps)
  }

  render () {
    return (
      <ReduxProvider store={store}>
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <AppNavigator />
        </ThemeContext.Provider>
      </ReduxProvider>
    )
  }
}
