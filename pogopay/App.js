import React, { useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import createBottomTabNavigator
import NavigationService from './NavigationService'; 
import Registration from './screens/Registration';
import CodeScreen from './screens/CodeScreen';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import Reset from './screens/Reset';
import HomeScreen from './screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import CodeQr from './screens/CodeQr';
import Profile from './screens/Profile';
import Transactions from './screens/Transactions'
import Transfer from './screens/Transfer';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // Create a TabNavigator

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      NavigationService.navigate('Welcome'); 
    }, 4000)
    return () => clearTimeout(timer); 
  }, []);

  return (
    <NavigationContainer ref={NavigationService.setTopLevelNavigator}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Register" component={Registration} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Code" component={CodeScreen} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Home" component={HomeTabNavigator} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="CODE QR" component={CodeQr} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Transaction History" component={Transactions} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Reset" component={Reset} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Transfer" component={Transfer} options={{ headerShown: false, gestureEnabled: false }} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Define your TabNavigator for the bottom navigation bar
const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => { // Destructure focused parameter
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'CODE QR') {
          iconName = 'qrcode';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        } 
        else if (route.name === 'Transactions') {
          iconName = 'exchange'; // Or any other suitable icon name
        
        } 

        // Define the color for focused and unfocused states
        const iconColor = focused ? '#03D3B9' : '#999999';

        // Return the corresponding icon component with the determined color
        return <Icon name={iconName} size={size} color={iconColor} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#03D3B9',
      inactiveTintColor: '#999999',
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="CODE QR" component={CodeQr} />
    <Tab.Screen name="Transactions" component={Transactions} />
    <Tab.Screen name="Profile" component={Profile} />

    {/* Add other tabs as needed */}
  </Tab.Navigator>
);
};

export default App;
