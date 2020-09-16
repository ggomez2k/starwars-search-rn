import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'
import AppNavigator from './navigation/AppNavigator'
import { ThemeContext, getTheme } from 'react-native-material-ui'
import { setCustomText } from 'react-native-global-props'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
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
      <PaperProvider
        settings={{
          icon: props => <AwesomeIcon {...props} />
        }}
      >
        <ReduxProvider store={store}>
          <ThemeContext.Provider value={getTheme(uiTheme)}>
            <AppNavigator />
          </ThemeContext.Provider>
        </ReduxProvider>
      </PaperProvider>
    )
  }
}
