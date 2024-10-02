import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { RootStackParamList } from './types/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Products } from './pages';
import SingleProduct from './pages/SingleProduct';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  
            name='products'
            component={ Products }
          />
          <Stack.Screen  
            name='singleProduct'
            component={ SingleProduct }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
