import React, { useCallback } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { useWalletConnect } from '@walletconnect/react-native-dapp'

const Button = ({ onPress, label }: any) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
)

const WalletConnect = () => {
  const connector = useWalletConnect()
  const connectWallet = useCallback(() => connector.connect(), [connector])
  const killSession = useCallback(() => connector.killSession(), [connector])

  return (
    <>
      {!connector.connected ? (
        <Button onPress={connectWallet} label='Connect to a wallet' />
      ) : (
        <View style={styles.container}>
          <Text>{connector.accounts[0]}</Text>
          <Button onPress={killSession} label='Log out' />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5A45FF',
    color: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default WalletConnect