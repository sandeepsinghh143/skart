import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const CartCard = ({item, deleteItemFromCart}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.coverImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
        <View style={styles.circleSizeContainer}>
          <View style={[styles.circle, {backgroundColor: item.color}]}></View>
          <View style={styles.circleSize}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteItemFromCart(item)}>
        <FontAwesome6 name={'trash'} color={'#f68cb5'} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  coverImage: {
    width: '25%',
    height: 125,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500',
  },
  price: {
    color: '#797979',
    marginVertical: 10,
    fontSize: 18,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  circleSizeContainer: {
    flexDirection: 'row',
  },
  circleSize: {
    backgroundColor: '#ffffff',
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
