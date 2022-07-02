import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './BottonNavigation';



const MainStack = () => {
    
  return (
    <NavigationContainer>
        <BottomNavigation/>
    </NavigationContainer>
  );
};
export default MainStack