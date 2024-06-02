import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Header from '../components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CartContext} from '../context/cartContext';
import Toast from 'react-native-toast-message';

const sizes = ['S', 'M', 'L', 'XL'];
const colorsArray = [
  '#91A1B0',
  '#B11D1D',
  '#1F44A3',
  '#9F632A',
  '#1D752B',
  '#000000',
];
const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const route = useRoute();
  const item = route.params.item;
  const navigation = useNavigation();
  const {addToCart} = useContext(CartContext);
  const handleAddToCart = item => {
    if (!selectedSize) {
      return Toast.show({
        type: 'error',
        text1: 'Warning',
        text2: 'Please choose a size first!',
        text1Style: {fontSize: 16, color: 'red'},
        text2Style: {fontSize: 12},
      });
    }
    if (!selectedColor) {
      return Toast.show({
        type: 'error',
        text1: 'Warning',
        text2: 'Please select a color first!',
        text1Style: {fontSize: 16, color: 'red'},
        text2Style: {fontSize: 12},
      });
    }
    item.size = selectedSize;
    item.color = selectedColor;
    navigation.navigate('CART');
    addToCart(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Image source={{uri: item.image}} style={styles.coverImage} />
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, styles.title]}>$ {item.price}</Text>
        </View>
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={styles.sizeValueContainer}
              onPress={() => setSelectedSize(size)}>
              <Text
                style={[
                  styles.sizeValue,
                  selectedSize === size && {color: '#e55b5b'},
                ]}>
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={[styles.title, styles.colorText]}>Colors</Text>
        <View style={styles.colorContainer}>
          {colorsArray.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.circleBorder,
                selectedColor === color && {borderColor: color, borderWidth: 2},
              ]}
              onPress={() => setSelectedColor(color)}>
              <View style={[styles.circle, {backgroundColor: color}]}></View>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(item)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9dede',
    flex: 1,
  },
  headerContainer: {
    padding: 20,
  },
  coverImage: {
    width: '100%',
    height: 420,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500',
  },
  sizeText: {},
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  colorText: {
    marginTop: 10,
  },
  colorContainer: {
    flexDirection: 'row',
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
  circleBorder: {
    height: 48,
    width: 48,
    borderRadius: 24,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e96e6e',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});
