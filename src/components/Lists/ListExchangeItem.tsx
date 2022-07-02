import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import useSWR from 'swr'
import { numberFormat } from '../../utlis/numberFormat'
import ModalInfo from '../Modals/ModalInfo'


type props = {
    id: string | number
    name: string
    marketCap: string
}
const ListExchangeItem = ({ name, marketCap, id }: props) => {
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return (
        <TouchableOpacity onPress={showModal}>
            <ModalInfo
                id={id}
                type={'exchange'}
                visible={visible}
                hideModal={hideModal}
            />
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>{name}</Text>
                    </View>
                </View>
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>{numberFormat(marketCap)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListExchangeItem

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 24,
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