import React from 'react'
import { View, Text,FlatList } from 'react-native'

import styles from './styles'

const GuaranteeNumbers = () => {
    const renderItem=()=>{
        return(
            <View style={styles.ticketNumberWrap}>
                <Text style={styles.ticketNumberText}>123</Text>
            </View>
        )
    }
  return (
    <View>
      <Text style={styles.header}>Guarantee</Text>
      <View>
      <FlatList
          data={Array(30).fill(30)}
          renderItem={renderItem}
        //   keyExtractor={(item: any) => item?.id}
          numColumns={6}
        />
      </View>
    </View>
  )
}

export default GuaranteeNumbers