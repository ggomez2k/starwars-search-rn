import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { Collapse, CollapseHeader/*, CollapseBody */ } from 'accordion-collapse-react-native'
import { withTheme } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get('window')
const Profile = () => {
  return (
    <View style={styles.content}>
      <View style={styles.button}>
        <Icon name='edit' size={18} color='white' />
        <Text>EDITAR</Text>
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
        <Collapse>
          <CollapseHeader style={{ marginTop: 10 }}>
            <Text style={{ marginHorizontal: 10 }}>Favoritos</Text>
            <View style={{ backgroundColor: 'grey', height: 2, width: '100%', alignSelf: 'center', marginTop: 10 }} />
          </CollapseHeader>
        </Collapse>
        <Collapse>
          <CollapseHeader style={{ marginTop: 10 }}>
            <Text style={{ marginHorizontal: 10 }}>Ver más tarde</Text>
            <View style={{ backgroundColor: 'grey', height: 2, width: '100%', alignSelf: 'center', marginTop: 10 }} />
          </CollapseHeader>
        </Collapse>
        <Collapse>
          <CollapseHeader style={{ marginTop: 10 }}>
            <Text style={{ marginHorizontal: 10 }}>Historial</Text>
            <View style={{ backgroundColor: 'grey', height: 2, width: '100%', alignSelf: 'center', marginTop: 10 }} />
          </CollapseHeader>
        </Collapse>
        <Collapse>
          <CollapseHeader style={{ marginTop: 10 }}>
            <Text style={{ marginHorizontal: 10 }}>Suscripciones</Text>
            <View style={{ backgroundColor: 'grey', height: 2, width: '100%', alignSelf: 'center', marginTop: 10 }} />
          </CollapseHeader>
        </Collapse>
      </View>
      <View style={styles.fullButton}>
        <Icon name='edit' size={18} color='green' style={{ marginHorizontal: 10 }} />
        <Text>CERRAR SESIÓN</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  profileSection: {
    flex: 1,
    margin: 0,
    padding: 0,
    height: height / 3,
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
    height: height / 1.6
  },
  button: {
    flexDirection: 'row',
    width: '30%',
    height: '5%',
    margin: 5,
    padding: 5,
    backgroundColor: 'grey',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 3,
    shadowColor: 'grey'
  },
  fullButton: {
    flexDirection: 'row',
    width: '100%',
    height: '6%',
    backgroundColor: 'orange',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  }
})

export default withTheme(Profile)
