import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { Home,Event,Setting,Login,Register } from './screens';
import Tabs from './navigation/tabs';
import PetsDetail from './components/PetsDetail.component';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello Yohan!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'Log'}
            >
                
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Event" component={Event} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="PetsDetail" component={PetsDetail} />
            </Stack.Navigator>
        </NavigationContainer>
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
