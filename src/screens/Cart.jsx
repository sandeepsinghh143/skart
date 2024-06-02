import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import {CartContext} from '../context/cartContext';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const {cart, totalPrice, deleteItemFromCart} = useContext(CartContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      {cart.length === 0 ? (
        <View style={styles.empty}>
          <Image
            source={require('../assets/emptyCart.png')}
            style={styles.emptyCart}
          />
          <Text style={styles.emptyText}>
            You have no items in your shopping cart
          </Text>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => {
              navigation.navigate('HOME');
            }}>
            <Text style={styles.homeBtnText}>Go To Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={({item}) => (
              <CartCard item={item} deleteItemFromCart={deleteItemFromCart} />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <>
                <View style={styles.priceContainer}>
                  <View style={styles.priceAndTitle}>
                    <Text style={styles.text}>Total :</Text>
                    <Text style={styles.text}>$ {totalPrice}</Text>
                  </View>
                  <View style={styles.priceAndTitle}>
                    <Text style={styles.text}>ShIpping :</Text>
                    <Text style={styles.text}>$ 0.0</Text>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.priceAndTitle}>
                  <Text style={styles.text}>Grand Total</Text>
                  <Text
                    style={[styles.text, {color: 'black', fontWeight: '700'}]}>
                    $ {totalPrice}
                  </Text>
                </View>
              </>
            }
          />

          <TouchableOpacity style={styles.checkoutContainer}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  container: {
    backgroundColor: '#f9dede',
    flex: 1,
    padding: 20,
  },
  priceContainer: {
    marginTop: 40,
  },
  priceAndTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#757575',
    fontSize: 18,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    marginVertical: 10,
  },
  checkoutContainer: {
    backgroundColor: '#e96e6e',
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCart: {
    height: 250,
    width: 250,
    borderWidth: 2,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 50,
    marginBottom: 20,
    textAlign: 'center',
  },
  homeBtn: {
    backgroundColor: '#e96e6e',
    paddingVertical: 10,
    paddingHorizontal: 40,
    // width: '100%',
    borderRadius: 10,
  },
  homeBtnText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
