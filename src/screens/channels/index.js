import React from 'react'
import {
  Text,
  Image,
  FlatList,
  View
} from 'react-native'
import Card from '../../components/Card'
import DATA from './MOCK_DATA.json'

const Channel = ({ channel }) => {
  const picture = {
    uri: String(channel.thumb)
  }
  return (
    <Card>
      <Image
        style={{ width: 80, height: 80, position: 'relative', alignSelf: 'center' }}
        source={picture}
      />
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={{ margin: 10, fontStyle: 'italic' }}>
          {channel.title}
        </Text>
        <Text style={{ fontSize: 10, padding: 10 }}>
          {channel.short_desc}
        </Text>
      </View>
    </Card>
  )
}

const displayChannelList = ({ item: channel }) => {
  // console.log(video)
  return (
    <Channel
      channel={channel}
    />
  )
}

const ChannelList = () => {
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={displayChannelList}
        keyExtractor={key => String(key.id)}
      />
    </>
  )
}

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     position: 'absolute',
//     backgroundColor: 'grey',
//     margin: 0,
//     width: '100%'
//   }
// })

export default ChannelList
