import './global'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Platform } from 'react-native'
import WalletConnectProvider from '@walletconnect/react-native-dapp'
import AsyncStorage from '@react-native-async-storage/async-storage'
import WalletConnect from './WalletConnect'
const ORIGIN = 'example'

export default function App() {
  return (
    <WalletConnectProvider
      redirectUrl={ Platform.OS === 'web' ? window.location.origin: `${ORIGIN}://`}
      storageOptions={{ asyncStorage: AsyncStorage }}
    >
      <View style={styles.container}>
        <WalletConnect />
        <StatusBar style='auto' />
      </View>
    </WalletConnectProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})