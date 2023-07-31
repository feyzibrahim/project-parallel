import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const ButtonComponent = () => {
  return (
    <TouchableOpacity style={styles.buttonWrap}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
  )
}

export default ButtonComponent