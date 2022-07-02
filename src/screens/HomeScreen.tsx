import React, {useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import useSWR from "swr";
import Search from '../components/Forms/Search'
import { fetcher } from '../utlis/fetcher'
import { coin } from '../types/coinType'
import { CoinResponse } from '../types/coinResponseType'
import ListCoinItem from '../components/Lists/ListCoinItem';
import ItemSeparator from '../components/Lists/ItemSeparator';
import ListHeader from '../components/Lists/ListHeader';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageIndex, setPageIndex] = useState(0)
  
  const { data : coins } = useSWR<CoinResponse>(`https://api.coinlore.net/api/tickers/?start=${pageIndex}&limit=100`, fetcher);


  const listOfCoins :coin[] = coins ? coins.data : []

  const filteredCoins =
  searchQuery === ''
      ? listOfCoins
      : listOfCoins.filter((coin) => {
          return coin.name.toLowerCase().includes(searchQuery.toLowerCase())
        })


  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
        <FlatList
          data={filteredCoins}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item)=> item.id}
          getItemLayout={(data, index) => (
            {length: 100, offset: 100 * index, index}
          )}
          renderItem={({ item }) => (
            <ListCoinItem
             key={item.id} 
             id={item.id}
             name={item.name} 
             symbol={item.symbol}
             onPress
             price={item.price_usd} 
             percetageChange={item.percent_change_7d}
             />
          )}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  containerSearch:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,

  },
  footer:{
    display:'flex'
  }
});