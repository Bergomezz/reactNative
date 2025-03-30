import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friends #1', age: 20 },
    { name: 'Friends #2', age: 29 },
    { name: 'Friends #3', age: 40 },
    { name: 'Friends #4', age: 30 },
    { name: 'Friends #5', age: 39 },
    { name: 'Friends #6', age: 50 },
    { name: 'Friends #7', age: 66 },
    { name: 'Friends #8', age: 46 },
    { name: 'Friends #9', age: 23 },
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
