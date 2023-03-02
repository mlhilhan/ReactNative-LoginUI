import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import Color from '../const/Color'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Input({
  label,
  iconName,
  error,
  password,
  placeHolder,
  keyboardType,
  autoCapitalize,
  onFocus = () => {},
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false)
  const [hidePassword, setHidePassword] = useState(password)

  return (
    <View style={styles.container}>
      <Text style={styles.labelTextStyle}>{label}</Text>

      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? Color.red
              : isFocused
              ? Color.darkBlue
              : Color.light,
          },
        ]}>
        <Icon name={iconName} color="#fff" size={30} style={styles.iconStyle} />
        <TextInput
          {...props}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          placeholder={placeHolder}
          placeholderTextColor={Color.darkGreen}
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus()
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          style={styles.inputTextStyle}
        />
        {password && (
          <Icon
            style={styles.hideIconStyle}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      {error && <Text style={styles.errorTextStyle}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '80%',
  },
  labelTextStyle: {
    marginVertical: 5,
    fontSize: 14,
    color: Color.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: 'rgb(220, 220, 220)',
    borderRadius: 100,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
  iconStyle: {
    fontSize: 22,
    color: Color.darkGreen,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputTextStyle: {
    flex: 1,
    color: Color.darkGreen,
    width: '80%',
    backgroundColor: 'rgb(220, 220, 220)',
  },
  errorTextStyle: {
    color: Color.red,
    fontSize: 12,
    marginTop: 7,
  },
  hideIconStyle: {
    fontSize: 22,
    color: Color.darkGreen,
    marginLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
})
