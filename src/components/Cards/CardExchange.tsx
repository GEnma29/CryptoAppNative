import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { dateFormat } from '../../utlis/dateFormat'
import { numberFormat } from '../../utlis/numberFormat'
import UrlButton from '../UrlButton'

type props = {
    data: any
}
const CardExchange = ({data}:props) => {

    const TrandingPairs :any[] = data[1] ? Object.entries(data[1]).map((key : any) => ({ ...key[1] })) : []
    console.log(TrandingPairs[0])
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{data[0].name}</Text>
    <View style={styles.containerData}>
      <Text style={styles.dataText}>Sice</Text>
      <Text style={styles.dataValue}>{dateFormat(`${data[0].date_live}`)}</Text>
    </View>
    <View style={styles.containerData}>
      <Text style={styles.dataText}>Url</Text>
      <UrlButton url={data[0].url}  label={data[0].name}/>
    </View>
    {
        TrandingPairs.length !== 0 ?  
        <>
        <Text style={styles.subtitle}>Trading pairs</Text>
         {
            TrandingPairs.slice(0, 5).map((item, index)=>{
                return(
                    <View key={index} style={styles.containerData}>
                        <Text style={styles.dataText}>{item.base}</Text>
                        <Text style={styles.dataValue}>{numberFormat(item.price_usd)}</Text>
                        </View>
                )
            })
         }
        </>: null
    }
  </View>
  )
}

export default CardExchange

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      padding: 2,
      marginBottom: 5,
    },
    title: {
      fontSize: 25,
      fontWeight: '800',
      color: ''
    },
    subtitle:{
        fontSize: 20,
        fontWeight: '800',
      color: ''
    },
    dataText: {
      display: 'flex',
      fontSize: 16,
      fontWeight: '400',
      marginTop: 2,
      color: '#58667e',
    },
    dataValue: {
      fontSize: 16,
      fontWeight: '400',
      marginRight: 5,
      marginTop: 2,
      color: '#101113',
  
    },
  
    containerData: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  
    }
  
  });