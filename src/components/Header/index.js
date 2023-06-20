import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AiOutlineMenu } from 'react-icons/ai';
import { TouchableOpacity } from 'react-native-web';
import Sidebar from '../Sidebar'

const Header = ({ title }) => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={toggleSidebar}>
          <AiOutlineMenu 
            fontWeight='800' 
            size={20} 
            color='rgba(255, 255, 255, 0.9)' 
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{ title }</Text>
      </View>

      {sidebarOpen && <Sidebar />}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  headerContent:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,

    width: '100%',
    height: 80,
    paddingHorizontal: 20,
  },
  headerText: {
    fontWeight: 800,
    fontSize: 25,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  sideBar: {

  },
});

export default Header;