import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native'

export default function Background({children}) {
  return (
    <View>
      <ImageBackground
        source={require('../../asset/BackgroundImage.png')}
        style={{height: '100%'}}
      />
      <View style={{position: 'absolute'}}>{children}</View>
    </View>
  )
}
