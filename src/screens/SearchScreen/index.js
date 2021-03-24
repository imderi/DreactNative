import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, TextInput, StyleSheet} from 'react-native';
import {Text, Button, Searchbar, Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.safearea}>
      <Searchbar
        style={styles.searchbar}
        onIconPress={() => navigation.goBack()}
        icon={({color, size}) => (
          <Icon name="ios-chevron-back" size={size} color={color} />
        )}
        placeholder="Search"
        autoFocus={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: 'white',
  },
  searchbar: {
    // height: 43,
    shadowOpacity: 0,
  },
});

export default SearchScreen;
