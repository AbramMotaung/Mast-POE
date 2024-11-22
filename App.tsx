import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from './Navigation';
import HomeScreen from './HomeScreen';
import AddMenuItemScreen from './AddMenuItemScreen';
import FilterScreen from './FilterScreen';

const App: React.FC = () => {
  const [menu, setMenu] = useState<Array<{ id: string; name: string; description: string; course: string; price: number }>>([]);
  const [screen, setScreen] = useState<'home' | 'add' | 'filter'>('home');
  const [selectedCourse, setSelectedCourse] = useState<string>(''); 

  const filteredMenu = selectedCourse
    ? menu.filter(item => item.course === selectedCourse)
    : menu;

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Chef's Menu</Text>
      <Navigation screen={screen} setScreen={setScreen} />
      {screen === 'home' ? (
        <HomeScreen menu={filteredMenu} setSelectedCourse={setSelectedCourse} /> 
      ) : screen === 'add' ? (
        <AddMenuItemScreen/>
      ) : (
        <FilterScreen menu={menu} setSelectedCourse={setSelectedCourse} /> 
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f8',
    minHeight: '100%',
    padding: 20,
    paddingTop: 40,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0b8e70',
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default App;