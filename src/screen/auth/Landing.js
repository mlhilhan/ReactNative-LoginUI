import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import Background from './Background'
import Button from '../../component/Button'
import Color from '../../const/Color'

export default function Landing({navigation}) {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.textStyle}></Text>
        <Button
          label={'Sign Up'}
          backgroundColor={Color.white}
          textColor={Color.darkGreen}
          onPress={() => navigation.navigate('SignUp')}
        />
        <Button
          label={'Login'}
          backgroundColor={Color.darkGreen}
          textColor={Color.white}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 100,
  },
  textStyle: {
    color: Color.white,
    fontSize: 38,
    marginBottom: 250,
    textAlign: 'center',
  },
})
