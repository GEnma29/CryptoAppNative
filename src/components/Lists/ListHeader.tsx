import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

type props = {
    firstColumn: string
    secoundColumn: string

}
const ListHeader = ({firstColumn, secoundColumn}: props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>{firstColumn}</Text>
        <Text style={styles.price}>{secoundColumn}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
      borderRadius: 15,
    },
    name:{
      display:'flex',
      fontSize: 18,
      fontWeight : 'bold',

    },
    price:{
        display:'flex',
        fontSize: 14

    }
  });

export default ListHeader