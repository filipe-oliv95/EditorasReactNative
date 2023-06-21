import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Sidebar = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={styles.menuItem}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Editoras')}>
        <Text style={styles.menuItem}>Editoras</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Carrinho')}>
        <Text style={styles.menuItem}>Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={styles.menuItem}>Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Sidebar;