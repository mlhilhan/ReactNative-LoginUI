import React, {useState, useEffect} from 'react'
import {Modal, StyleSheet, Text, View} from 'react-native'
import Color from '../const/Color'
import Icon from 'react-native-vector-icons/Ionicons'
import Button from './Button'

export default function ModalMessage({
  visible = false,
  onRequestClose,
  singleButtonOnPress,
  iconName,
  iconColor,
  singleButtonLabel,
  title,
  message,
  twoButton,
  leftButtonLabel,
  leftButtonOnPress,
  rightButtonLabel,
  rightButtonOnPress,
}) {
  return (
    visible && (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={onRequestClose}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon
                name={iconName}
                color={iconColor}
                size={30}
                style={styles.iconStyle}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  margin: 10,
                  fontSize: 22,
                  color: Color.black,
                }}>
                {title}
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  textAlign: 'center',
                  fontSize: 17,
                  color: Color.black,
                }}>
                {message}
              </Text>

              {twoButton == true ? (
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginRight: 50}}>
                    <Button
                      label={leftButtonLabel}
                      backgroundColor={Color.white}
                      textColor={Color.green}
                      width={80}
                      onPress={leftButtonOnPress}
                    />
                  </View>
                  <View style={{marginLeft: 50}}>
                    <Button
                      label={rightButtonLabel}
                      backgroundColor={Color.white}
                      textColor={Color.darkGreen}
                      width={80}
                      onPress={rightButtonOnPress}
                    />
                  </View>
                </View>
              ) : (
                <Button
                  label={singleButtonLabel}
                  backgroundColor={Color.white}
                  textColor={Color.darkGreen}
                  width={80}
                  onPress={singleButtonOnPress}
                />
              )}
            </View>
          </View>
        </Modal>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconStyle: {
    fontSize: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
  messageText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
