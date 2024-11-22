import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MenuItemComponent } from './MenuItemComponent';

interface FilterScreenProps {
  menu: Array<{ id: string; name: string; description: string; course: string; price: number }>;
}

const FilterScreen: React.FC<FilterScreenProps> = ({ menu }) => {
  const [selectedCourse, setSelectedCourse] = useState('All');

  const filteredMenu = menu.filter((item) => {
    if (selectedCourse === 'All') return true;
    return item.course === selectedCourse;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>
      <View style={styles.filterButtons}>
        <Button title="All" onPress={() => setSelectedCourse('All')} />
        <Button title="Starter" onPress={() => setSelectedCourse('Starter')} />
        <Button title="Main" onPress={() => setSelectedCourse('Main')} />
        <Button title="Dessert" onPress={() => setSelectedCourse('Dessert')} />
      </View>
      <FlatList
        data={filteredMenu}
        renderItem={({ item }) => <MenuItemComponent item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default FilterScreen;