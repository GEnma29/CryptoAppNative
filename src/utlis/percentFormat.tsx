import { View } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function percentChange(percent: string) {
  return  Number(percent) > 0 ?
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <MaterialIcons name='arrow-drop-down' color={'#34C759'} />
            <Text>{Math.abs(Number(percent))}</Text>
        </View>

        :
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <MaterialIcons name='arrow-drop-down' color={'#FF3B30'} />
            <Text>{Math.abs(Number(percent))}</Text>
        </View>


}