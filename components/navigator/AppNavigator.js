import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from '../screens/Screen01'
import Screen02 from '../screens/Screen02'
import Screen03 from '../screens/Screen03'
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen01" component={Screen01} />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}