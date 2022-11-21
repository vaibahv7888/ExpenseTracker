import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import AddTransaction from './src/Screens/AddTransaction/AddTransaction';
import { GlobalProvider } from './src/Screens/HomeScreen/Context/GlobalState';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddTransaction" 
          component={AddTransaction} 
          options={{ 
            headerTitle: 'Add transaction',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: '#E9EEEF',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black'
            },
            headerBackTitleVisible: false,
            headerTintColor: 'grey'
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <GlobalProvider>
      {/* <HomeScreen /> */}
      <MyStack />
      <StatusBar style="auto" />
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
