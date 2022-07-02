import React from 'react'
import { View , StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { numberFormat } from '../../utlis/numberFormat'
import {coin} from '../../types/coinType'
type props = {
    data: coin[] 
}

const CardCoin = ({data}:props) => {
    const priceChangeColor = Number(data[0].percent_change_1h) > 0 ? '#34C759' : '#FF3B30';
  return (
    <View>
    <Text style={styles.title}>{data[0].name}</Text>
    <View style={styles.containerData}>
      <Text style={styles.dataText}>Symbol</Text>
      <Text style={styles.dataValue}>{data[0].symbol}</Text>
    </View>
    <View style={styles.containerData}>
      <Text style={styles.dataText}>Rank</Text>
      <Text style={styles.dataValue}>#{data[0].rank}</Text>
    </View>
    <View style={styles.containerData}>
      <Text style={styles.dataText}>Price</Text>
      <View style={{display: 'flex', flexDirection:'row'}}>
      <Text style={styles.dataValue}>{numberFormat(data[0].price_usd)}</Text>
      <Text style={[styles.dataValue, {color: priceChangeColor}]}>{data[0].percent_change_1h}</Text>
      </View>
    </View>
    <View style={styles.containerData}>
      <Text style={styles.dataText}>Market Cap</Text>
      <Text style={styles.dataValue}>{numberFormat(data[0].market_cap_usd)}</Text>
    </View>
    <View style={styles.containerData}>
      <Text style={styles.dataText}>Volumen 24h</Text>
      <Text style={styles.dataValue}>{numberFormat(`${data[0].volume24}`)}</Text>
    </View>
    <View style={styles.containerData}>
      <Text style={styles.dataText}>Circulating Supply</Text>
      <Text style={styles.dataValue}>{numberFormat(`${data[0].csupply}`)}</Text>
    </View>
  </View>
  )
}

export default CardCoin

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '98%',
      backgroundColor: '#FFFF',
      padding: 8,
      borderRadius: 10
    },
    title: {
      fontSize: 25,
      fontWeight: '800',
      color: '',
      marginBottom: 5,
    },
    dataText: {
      display: 'flex',
      fontSize: 16,
      fontWeight: '400',
      marginTop: 4,
      color: '#58667e',
    },
    dataValue: {
      fontSize: 16,
      fontWeight: '400',
      marginRight: 5,
      marginTop: 4,
      color: '#101113',
  
    },
  
    containerData: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  
    }
  
  });