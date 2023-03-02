import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

export default function Button({backgroundColor, label, textColor, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 300,
        paddingVertical: 5,
        marginVertical: 10,
      }}>
      <Text
        style={{
          color: textColor,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
