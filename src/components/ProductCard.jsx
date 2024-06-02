import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({item}) => {
    const [isLiked,setIsLiked] = useState(false);
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("PRODUCT_DETAILS",{item})}>
      <Image source={{uri:item.image}} style={styles.coverImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
      <TouchableOpacity style={styles.likeContainer} onPress={()=>setIsLiked(!isLiked)}>
        <AntDesign name={isLiked?"heart":"hearto"} size={20} color={"#e55b5b"}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    position:"relative"
  },
  coverImage: {
    height: 256,
    width: '90%',
    borderRadius: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    color: '#444444',
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    color: '#9c9c9c',
    fontWeight: '600',
  },
  content:{
    paddingLeft:15
  },
  likeContainer:{
    position:"absolute",
    height:34,
    width:34,
    backgroundColor:"#ffffff",
    borderRadius:17,
    justifyContent:"center",
    alignItems:"center",
    top:20,
    right:30
  }
});
