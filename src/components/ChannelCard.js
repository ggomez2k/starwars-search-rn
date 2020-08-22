import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { withTheme } from 'react-native-material-ui'

const { width } = Dimensions.get('window')
const ChannelCard = (props) => {
  return (
    <View style={styles.card}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 2,
    borderRadius: 5,
    width: width / 2.5,
    marginHorizontal: 20,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'grey',
    elevation: 10
    // backgroundColor: theme.color.neutral
  }
})

export default withTheme(ChannelCard)
