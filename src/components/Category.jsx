import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Category = ({title, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectedCategory(title)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === title && {
            color: '#ffffff',
            backgroundColor: '#e96e6e',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#938f8f',
    backgroundColor: '#dfdcdc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 16,
    marginRight: 10,
  },
});
