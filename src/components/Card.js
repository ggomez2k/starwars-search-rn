import React from 'react'
import { View, StyleSheet } from 'react-native'
import { withTheme } from 'react-native-material-ui'

// const { theme } = this.props
const Card = (props) => {
  return (
    <View style={styles.card}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    marginHorizontal: 60,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: 'grey',
    elevation: 10
    // backgroundColor: theme.color.neutral
  }
})

export default withTheme(Card)
