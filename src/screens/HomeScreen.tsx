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
  
  const { data : coins } = useSWR<CoinResponse>(`tickers/?start=${pageIndex}&limit=100`, fetcher);


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
          style={styles.listStyles}
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
    flexDirection: 'column',
    backgroundColor: '#1F618D',
    justifyContent:'center',
    alignContent: 'center',
    width:'100%',
  },
  containerSearch:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
    marginTop: "15%"

  },
  listStyles:{
    display: 'flex',
    marginTop: '15%',
    borderRadius: 24,
    backgroundColor: '#FFFF',

  },
  footer:{
    display:'flex'
  }
});