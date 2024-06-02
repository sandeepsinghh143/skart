import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({isCart}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.appContainer}
        onPress={() => navigation.goBack()}>
        {isCart ? (
          <Ionicons name={'chevron-back'} color={'#e96e6e'} size={24} />
        ) : (
          <Image
            source={require('../assets/appIcon.png')}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.cart}>Cart</Text>}
      <Image source={require('../assets/dp.png')} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appContainer: {
    backgroundColor: '#ffffff',
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    height: 24,
    width: 24,
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  cart: {
    fontSize: 28,
    color: 'black',
  },
});
