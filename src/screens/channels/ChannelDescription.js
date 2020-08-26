import React, { useEffect } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { useNavigation, useRoute, StackActions } from '@react-navigation/native'
import { withTheme } from 'react-native-material-ui'
import Card from '../../components/Card'
import bgimage from '../../../assets/images/film.png'
import DATA from './channel_video.json'

const Video = ({ video }) => {
  const navigation = useNavigation()
  const thumb = {
    uri: String(video.thumb)
  }
  return (
    <TouchableHighlight
      onPress={() => {
        const pushAction = StackActions.push('VideoPlayer', { video })
        navigation.dispatch(pushAction)
        navigation.navigate('VideoPlayer', { video })
      }}
    >
      <Card>
        <Image
          style={{ width: 80, height: 80, position: 'relative', alignSelf: 'center' }}
          source={thumb}
        />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={{ margin: 10, fontStyle: 'italic' }}>
            {video.title}
          </Text>
          <Text style={{ fontSize: 10, padding: 10 }}>
            {video.short_desc}
          </Text>
        </View>
      </Card>
    </TouchableHighlight>
  )
}

const displayVideoList = ({ item: video }) => {
  // console.log(video)
  return (
    <Video
      video={video}
    />
  )
}

const ChannelDescription = () => {
  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    navigation.setOptions({
      title: `Canal: ${route.params.title}`
    })
  })

  return (
    <>
      <Image
        style={styles.background}
        source={bgimage}
        resizeMode='cover'
      />
      <FlatList
        data={DATA}
        renderItem={displayVideoList}
        keyExtractor={key => String(key.id)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'grey',
    margin: 0,
    width: '100%'
  }
})

export default withTheme(ChannelDescription)
