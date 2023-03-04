import React, {useState} from 'react'
import {StyleSheet, Text, View, Keyboard} from 'react-native'
import Input from '../../component/Input'
import Button from '../../component/Button'
import Color from '../../const/Color'
import Loader from '../../component/Loader'
import ModalMessage from '../../component/ModalMessage'

export default function Login({navigation}) {
  const [errors, setErrors] = useState({})
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [loading, setLoading] = useState(false)
  const [errorModalVisible, setErrorModalVisible] = useState(false)
  const [errorModalMessage, setErrorModalMessage] = useState('')

  const Validate = () => {
    Keyboard.dismiss()
    let isValid = true
    if (!inputs.email) {
      HandleError('Please input email', 'email')
      isValid = false
      setErrorModalVisible(true)
      setErrorModalMessage('There are required fields to be filled.')
    }
    if (!inputs.password) {
      HandleError('Please input password', 'password')
      isValid = false
      setErrorModalVisible(true)
      setErrorModalMessage('There are required fields to be filled.')
    }
    if (isValid) {
      Login()
    }
  }

  const HandleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}))
  }

  const HandleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}))
  }

  const Login = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setErrorModalMessage('')
    }, 200)
  }

  return (
    <View style={styles.container}>
      <View style={styles.freeAreaContainer} />
      <View style={styles.subContainer}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subTitleText}>Login to your account</Text>

        <Input
          placeHolder="Enter your e-mail address"
          iconName="mail-outline"
          label="E-Mail"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => HandleOnchange(text, 'email')}
          onFocus={() => HandleError(null, 'email')}
          error={errors.email}
          fieldRequired={true}
        />
        <Input
          placeHolder="Enter your password"
          iconName="md-lock-closed-outline"
          label="Password"
          onChangeText={text => HandleOnchange(text, 'password')}
          onFocus={() => HandleError(null, 'password')}
          error={errors.password}
          password={true}
          fieldRequired={true}
        />

        <View style={styles.subButtonContainer}>
          <Button
            label={'Login'}
            backgroundColor={Color.darkGreen}
            textColor={Color.white}
            width={300}
            onPress={Validate}
          />
        </View>
        <View style={styles.goSignUpContainer}>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={styles.goSignUpText}>
            Don't have an account? Sign Up.
          </Text>
        </View>
      </View>

      <Loader visible={loading} />

      <ModalMessage
        visible={errorModalVisible}
        onRequestClose={() => setErrorModalVisible(!errorModalVisible)}
        singleButtonOnPress={() => setErrorModalVisible(!errorModalVisible)}
        iconName={'close-circle'}
        iconColor={Color.red}
        singleButtonLabel={'Okey'}
        title={'Error'}
        message={errorModalMessage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  goSignUpContainer: {
    alignItems: 'center',
    width: '80%',
    paddingRight: 16,
  },
  goSignUpText: {
    color: Color.darkGreen,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
})
