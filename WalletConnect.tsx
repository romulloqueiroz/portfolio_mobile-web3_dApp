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
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to my Wallet! </Text>
          <Button onPress={connectWallet} label='Connect to a wallet' />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Address from Provider: </Text>
          <Text style={styles.address}>{connector.accounts[0]}</Text>
          <Button onPress={killSession} label='Log out' />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F58420',
    color: '#FFFFFF',
    fontWeight: 'bold',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
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