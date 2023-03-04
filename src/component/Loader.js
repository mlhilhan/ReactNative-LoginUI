import React from 'react'
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import Color from '../const/Color'

export default function Loader({visible = false}) {
  // const {width, height} = useWindowDimensions();

  return (
    visible && (
      <View style={[styles.container]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Color.blue} />
          <Text style={{marginLeft: 10, fontSize: 16}}>Loading...</Text>
        </View>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
  },
  loader: {
    height: 70,
    backgroundColor: Color.white,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})
