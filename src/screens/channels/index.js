import React from 'react'
import {
  // StyleSheet,
  Text,
  Image,
  FlatList,
  View
} from 'react-native'
import ChannelCard from '../../components/ChannelCard'
import DATA from './MOCK_DATA.json'

const Channel = ({ channel }) => {
  const picture = {
    uri: String(channel.picture)
  }
  return (
    <View style={{ flex: 1 }}>
      <ChannelCard>
        <Image
          style={{ width: 80, height: 60, alignSelf: 'center' }}
          source={picture}
        />
      </ChannelCard>
      <View style={{ flex: 1, alignSelf: 'flex-start', marginHorizontal: 10 }}>
        <Text style={{ margin: 10 }}>
          {channel.title}
        </Text>
      </View>
    </View>
  )
}

const displayChannelList = ({ item: channel }) => {
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
        numColumns={2}
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
