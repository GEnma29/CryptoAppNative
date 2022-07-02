import React, { useState } from 'react'
import { View, StyleSheet , TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import useSWR from 'swr'
import { numberFormat } from '../../utlis/numberFormat'
import ModalInfo from '../Modals/ModalInfo'

type props = {
    id: string | number
    name : string
    price: string
    percetageChange : string
    symbol?: string
    onPress : any
}
const ListCoinItem = ({
  id,
  name,
  price,
  symbol,
  percetageChange,
}: props) => {

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const priceChangeColor = Number(percetageChange) > 0 ? '#34C759' : '#FF3B30';
  return (
    <TouchableOpacity onPress={showModal}>
      <ModalInfo
      id={id} 
      type={'coin'}
      visible={visible}
      hideModal={hideModal}
      />
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{ name}</Text>
            <Text style={styles.subtitle}>{symbol ? symbol.toUpperCase() : ''}</Text>
          </View>
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>{numberFormat(price)}</Text>
          {//<Text style={styles.title}>${Number(price).toLocaleString('en-US', { currency: 'USD', currencySign:''})}</Text>
}
         <Text style={[styles.subtitle, {color: priceChangeColor}]}>{Number(percetageChange).toFixed(2)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
})

export default ListCoinItem