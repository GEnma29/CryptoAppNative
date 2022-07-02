import React, {useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import useSWR from "swr";
import Search from '../components/Forms/Search'
import { fetcher } from '../utlis/fetcher'
import ItemSeparator from '../components/Lists/ItemSeparator';
import { Exchange } from '../types/exchangeType';
import { Text } from 'react-native-paper';
import ListHeader from '../components/Lists/ListHeader';
import ListExchangeItem from '../components/Lists/ListExchangeItem';


const ExchangesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageIndex, setPageIndex] = useState(0)
  
  const { data : Exchanges } = useSWR(`exchanges/`, fetcher);
  
  const listOfExchanges :any[] = Exchanges ? Object.entries(Exchanges).map((key : any) => ({ ...key[1] })) : []
  const filterExchanges0 = listOfExchanges.filter((exchange) => {
    return exchange.volume_usd !== 0
  })

  console.log(listOfExchanges)
  const filteredExchanges =
  searchQuery === ''
      ? filterExchanges0
      : filterExchanges0.filter((exchange) => {
          return exchange.name.toLowerCase().includes(searchQuery.toLowerCase())
        })


  return (
    <View style={styles.container}>
       <View style={styles.containerSearch}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <FlatList
          data={filteredExchanges}
          style={styles.listStyles}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item)=> item.id}
          getItemLayout={(data, index) => (
            {length: 100, offset: 100 * index, index}
          )}
          renderItem={({ item }) => (
            <ListExchangeItem key={item.id} id={item.id} name={item.name} marketCap={item.volume_usd} />
          )}
        />
    </View>
  )
}

export default ExchangesScreen
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