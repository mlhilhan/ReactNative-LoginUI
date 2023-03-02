import React, {useState} from 'react'
import {StyleSheet, Text, View, Keyboard, ScrollView} from 'react-native'
import Button from '../../component/Button'
import Input from '../../component/Input'
import Loader from '../../component/Loader'
import Color from '../../const/Color'

export default function SignUp({navigation}) {
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    fullName: '',
    password: '',
    passwordAgain: '',
  })

  const Validate = () => {
    Keyboard.dismiss()
    let isValid = true
    if (!inputs.email) {
      HandleError('Please input email', 'email')
      isValid = false
    }
    if (!inputs.password) {
      HandleError('Please input password', 'password')
      isValid = false
    }
    if (!inputs.passwordAgain) {
      HandleError('Please input password again', 'passwordAgain')
      isValid = false
    }
    if (isValid) {
      Register()
    }
  }

  const HandleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}))
  }

  const HandleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}))
  }

  const Register = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.freeAreaContainer} />
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>Welcome</Text>
          <Text style={styles.subTitleText}>Create a new account</Text>
          <Input
            placeHolder="Enter your e-mail address"
            iconName="mail-outline"
            label="E-Mail"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={text => HandleOnchange(text, 'email')}
            onFocus={() => HandleError(null, 'email')}
            error={errors.email}
          />
          <Input
            placeHolder="Enter your username"
            iconName="person-outline"
            label="Username"
            autoCapitalize="none"
            onChangeText={text => HandleOnchange(text, 'username')}
          />
          <Input
            placeHolder="Enter your full name"
            iconName="person-outline"
            label="Full Name"
            onChangeText={text => HandleOnchange(text, 'fullName')}
          />
          <Input
            placeHolder="Enter your password"
            iconName="md-lock-closed-outline"
            label="Password"
            onChangeText={text => HandleOnchange(text, 'password')}
            onFocus={() => HandleError(null, 'password')}
            error={errors.password}
            password={true}
          />
          <Input
            placeHolder="Enter your password again"
            iconName="md-lock-closed-outline"
            label="Password Again"
            onChangeText={text => HandleOnchange(text, 'passwordAgain')}
            onFocus={() => HandleError(null, 'passwordAgain')}
            error={errors.passwordAgain}
            password={true}
          />
          <View style={styles.subButtonContainer}>
            <Button
              label={'Sign Up'}
              backgroundColor={Color.darkGreen}
              textColor={Color.white}
              onPress={Validate}
            />
          </View>
        </View>
      </ScrollView>

      <Loader visible={loading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  freeAreaContainer: {
    height: 200,
    width: '100%',
    backgroundColor: Color.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderTopLeftRadius: 150,
    paddingTop: 100,
  },
  titleText: {
    fontSize: 40,
    color: Color.darkGreen,
    fontWeight: 'bold',
  },
  subTitleText: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subButtonContainer: {
    alignItems: 'center',
    width: '80%',
    marginTop: 100,
  },
})
