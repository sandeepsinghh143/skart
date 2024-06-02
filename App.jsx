import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './src/screens/ProductDetails';
import Cart from './src/screens/Cart';
import CartProvider, {CartContext} from './src/context/cartContext';
import Account from './src/screens/Account';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HOME">
      <Stack.Screen name="HOME" component={Home} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HOME"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#e96e6e',
          }}>
          <Tab.Screen
            name="HOME_STACK"
            component={HomeStack}
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <Entypo name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={Home}
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <MaterialIcons name="reorder" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="CART"
            component={Cart}
            options={{
              tabBarIcon: ({size, color, focused}) => {
                const {cart} = useContext(CartContext);
                return (
                  <View style={{position: 'relative'}}>
                    <MaterialCommunityIcons
                      name="cart"
                      color={color}
                      size={size}
                    />
                    {cart.length > 0 && (
                      <View
                        style={[styles.cartCircle, {backgroundColor: color}]}>
                        <Text style={styles.cartText}>{cart.length}</Text>
                      </View>
                    )}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={Account}
            options={{
              tabBarIcon: ({size, color, focused}) => (
                <FontAwesome6 name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  cartCircle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    right: -5,
  },
  cartText: {
    fontSize: 10,
    color: '#ffffff',
  },
});
