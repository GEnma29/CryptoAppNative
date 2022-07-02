import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Modal, Portal, Text } from 'react-native-paper';
import useSWR from 'swr';
import { fetcher } from '../../utlis/fetcher';
import { coin } from '../../types/coinType'
import CardCoin from '../Cards/CardCoin';
import CardExchange from '../Cards/CardExchange';


type props = {
  type : 'coin' | 'exchange'
  id: string | number
  visible: boolean
  hideModal: () => void
}



const ModalInfo = ({ visible, hideModal, id , type}: props) => {

  const { data: coin } = useSWR<coin[]>(type === 'coin' ? `ticker/?id=${id}` : null, fetcher)
  const { data: exchange } = useSWR(type === 'exchange' ? `exchange/?id=${id}` : null, fetcher)

  const exchangeArry :any[] = exchange ? Object.entries(exchange).map((key : any) => ({ ...key[1] })) : []
   console.log(exchangeArry)
  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.container}>
        {
          type === "coin" ? 
        !coin ? <Text>loading</Text> :
        <CardCoin data={coin} />
        :
        !exchange ? <Text>loading</Text> :
        <CardExchange data={exchangeArry} />
        }
        <View style={styles.containerButton}>
        <Button  style={[styles.button]}   onPress={hideModal}>
         { type === "coin" ?  'Explorer Coins' : 'Explorer Exchange'}
        </Button>
        </View>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '92%',
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    padding: 8,
    borderRadius: 10
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: ''
  },
  containerButton : {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button:{
    display: 'flex',
    padding: 10,
    marginTop: 5,
    width: 180,
    color: '#1F618D',
  }

});

export default ModalInfo