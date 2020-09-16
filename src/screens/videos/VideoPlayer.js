import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { withTheme } from 'react-native-material-ui'

const VideoPlayer = () => {
  const route = useRoute()
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      title: `Video: ${route.params.video.title}`
    })
  })
  return (
    <View>
      <Text>
        Play Video Here
      </Text>
    </View>
  )
}

export default withTheme(VideoPlayer)
