import React from 'react'
import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  View
} from 'react-native'
import Card from '../../components/Card'
import bgimage from '../../../assets/images/film.png'
import DATA from './MOCK_DATA.json'

const Video = ({ video }) => {
  const thumb = {
    uri: String(video.thumb)
  }
  return (
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

const VideoList = () => {
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
    backgroundColor: 'orange',
    margin: 0,
    width: '100%'
  }
})

export default VideoList
