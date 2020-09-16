import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { withTheme } from 'react-native-material-ui'

const { width, height } = Dimensions.get('window')
const Profile = () => {
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.button}>
        <Button
          icon='edit'
          mode='contained'
          color='#694fad'
          onPress={() => { console.warn('pressed button') }}
        >
          EDITAR
        </Button>
      </View>
      <View style={styles.profileSection}>
        <Image
          style={{ width: 70, height: 70, borderRadius: 50, margin: 20, alignSelf: 'center' }}
          source={{ uri: 'https://www.vhv.rs/dpng/d/561-5617462_hurt-user-profile-image-dummy-hd-png-download.png' }}
        />
        <View style={styles.userInfo}>
          <Text>Woosy World user</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'red', height: 2, width: '100%', alignSelf: 'center', marginHorizontal: 10 }} />
      <View style={styles.settingsContent}>
        <Button
          mode='outlined'
          style={{ alignItems: 'flex-start' }}
          onPress={() => {
            navigation.navigate('Favoritos')
          }}
        >
          Favoritos
        </Button>
        <Button
          mode='outlined'
          style={{ alignItems: 'flex-start' }}
          onPress={() => {
            navigation.navigate('Ver más tarde')
          }}
        >
          Ver más tarde
        </Button>
        <Button
          mode='outlined'
          style={{ alignItems: 'flex-start' }}
          onPress={() => {
            navigation.navigate('Historial')
          }}
        >
          Historial
        </Button>
        <Button
          mode='outlined'
          style={{ alignItems: 'flex-start' }}
          onPress={() => {
            navigation.navigate('Suscripciones')
          }}
        >
          Suscripciones
        </Button>
      </View>
      <View>
        <Button
          icon='sign-out'
          mode='outlined'
          color='#694fad'
          onPress={() => {}}
        >
          CERRAR SESIÓN
        </Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  profileSection: {
    flex: 1,
    margin: 0,
    padding: 0,
    height: height / 2,
    flexDirection: 'row'
  },
  userInfo: {
    flex: 1,
    margin: 0,
    padding: 0,
    flexDirection: 'row',
    width: width / 1.5,
    alignItems: 'center',
    alignContent: 'center'
  },
  settingsContent: {
    height: height / 1.8
  },
  button: {
    flexDirection: 'row',
    padding: 2,
    alignSelf: 'flex-end'
  }
})

export default withTheme(Profile)
