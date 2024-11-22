import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MenuItemComponent from './MenuItemComponent';

interface HomeScreenProps {
  menu: Array<{ id: string; name: string; description: string; course: string; price: number }>;
  setSelectedCourse: (course: string) => void; 
}

const HomeScreen: React.FC<HomeScreenProps> = ({ menu, setSelectedCourse }) => (
  <View style={styles.screen}>
    <Text style={styles.header}>Menu</Text
    <View style={styles.filterContainer}>
      <Button title="All" onPress={() => setSelectedCourse('')} />
      <Button title="Appetizer" onPress={() => setSelectedCourse('Appetizer')} />
      <Button title="Main Course" onPress={() => setSelectedCourse('Main Course')} />
      <Button title="Dessert" onPress={() => setSelectedCourse('Dessert')} />
    </View>

    {menu.length === 0 ? (
      <Text style={styles.noMenuText}>No menu items available. Add a dish to get started!</Text>
    ) : (
      menu.map((item) => (
        <MenuItemComponent key={item.id} item={item} />
      ))
    )}
    <Text style={styles.totalItems}>Total Items: {menu.length}</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
 textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  noMenuText: {
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginBottom: 16,
    textAlign: 'center',
  },
  totalItems: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#0b8e70',
  },
});

export default HomeScreen;