import React, { useState } from 'react'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { View, Image, Button, TextInput, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'

function PhoneSignIn () {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null)
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const navigation = useNavigation()

  // Handle the button press
  async function signInWithPhoneNumber (phone) {
    var fullPhone = '+52' + phone
    try {
      const confirmation = await auth().signInWithPhoneNumber(fullPhone)
      setConfirm(confirmation)
    } catch (error) {
      console.warn(error)
    }
  }

  async function confirmCode () {
    try {
      var login = await confirm.confirm(code)
    } catch (error) {
      console.warn('Invalid code.')
    }

    if (login) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'BottomTab' }
          ]
        })
      )
    }
  }

  return (
    <View style={styles.centered}>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://dummyimage.com/300' }}
      />
      {!confirm
        ? <>
          <TextInput
            style={{ margin: 20, borderWidth: 2, width: '50%' }}
            onChangeText={phone => setPhone(phone)}
            value={phone}
            placeholder='Your phone here'
          />
          <Button
            title='Phone Number Sign In'
            onPress={() => signInWithPhoneNumber(phone)}
          />
        </>
        : <>
          <TextInput
            style={{ margin: 20, borderWidth: 2, width: '50%' }}
            value={code}
            onChangeText={text => setCode(text)}
          />
          <Button title='Confirm Code' onPress={() => confirmCode()} />
        </>}
    </View>
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    margin: 15,
    alignItems: 'center'
  }
})

export default PhoneSignIn
