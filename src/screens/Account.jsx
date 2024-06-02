import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Account = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Header />
      <View style={styles.account}>
        <View style={styles.accountItem}>
          <MaterialIcons name={'account-circle'} size={30} />
          <Text style={styles.accountItemText}>Account</Text>
        </View>
        <View style={styles.accountItem}>
          <Ionicons name={'heart-circle'} size={30} />
          <Text style={styles.accountItemText}>WishList</Text>
        </View>
        <View style={styles.accountItem}>
          <Ionicons name={'logo-instagram'} size={30} />
          <Text style={styles.accountItemText}>Follow Us on Instagram</Text>
        </View>
        <View style={styles.accountItem}>
          <Ionicons name={'logo-twitter'} size={30} />
          <Text style={styles.accountItemText}>Follow Us on X</Text>
        </View>
        <View style={styles.accountItem}>
          <Ionicons name={'logo-facebook'} size={30} />
          <Text style={styles.accountItemText}>Follow Us on Facebook</Text>
        </View>
        <View style={styles.accountItem}>
          <Feather name={'shopping-bag'} size={30} />
          <Text style={styles.accountItemText}>All Orders</Text>
        </View>
        <View style={styles.accountItem}>
          <Ionicons name={'settings'} size={30} />
          <Text style={styles.accountItemText}>Settings</Text>
        </View>
        <View style={styles.accountItem}>
          <Ionicons name={'mail'} size={30} />
          <Text style={styles.accountItemText}>Contact Us</Text>
        </View>
      </View>
      <Text style={styles.copyText}>
        Copyright &copy; {new Date().getFullYear()} @ skart All Rights Reserved
        &reg;
      </Text>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9dede',
    flex: 1,
  },
  account: {
    paddingVertical: 20,
  },
  accountItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#c0c0c0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountItemText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
  },
  copyText: {
    textAlign: 'center',
  },
});
