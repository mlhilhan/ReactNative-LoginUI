import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

export default function Button({
  backgroundColor,
  label,
  textColor,
  onPress,
  width = 300,
  fontSize = 20,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 100,
        alignItems: 'center',
        width: width,
        paddingVertical: 5,
        marginVertical: 10,
      }}>
      <Text
        style={{
          color: textColor,
          fontSize: fontSize,
          fontWeight: 'bold',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
