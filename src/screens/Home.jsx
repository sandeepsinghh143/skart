import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';

const categories = ['Trending Now', 'All', 'New', 'Men', 'Women'];
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [products, setProducts] = useState(data.products);
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flexDirection: 'row'}}>
        <FlatList
          numColumns={2}
          ListHeaderComponent={
            <>
              <Text style={styles.matchText}>Match Your Style</Text>
              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Fontisto name={'search'} size={26} color={'#c0c0c0'} />
                </View>
                <TextInput style={styles.TextInput} placeholder="Search" />
              </View>
              <FlatList
                data={categories}
                renderItem={({item}) => (
                  <Category
                    title={item}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                )}
                keyExtractor={item => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </>
          }
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingBottom: 150,
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9dede',
    padding: 20,
  },
  matchText: {
    fontSize: 28,
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    height: 48,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  TextInput: {
    flex: 1,
    fontSize: 20,
  },
});
