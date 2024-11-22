import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface MenuItemComponentProps {
  item: { id: string; name: string; description: string; course: string; price: number };
  removeMenuItem: (id: string) => void;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ item, removeMenuItem }) => (
  <View style={styles.menuItem}>
    <Text style={styles.menuItemText}>{item.name}</Text>
    <Text>{item.description}</Text>
    <Text>{item.course}</Text>
    <Text>R{item.price.toFixed(2)}</Text>
    <Button title="Remove" onPress={() => removeMenuItem(item.id)} color="#e74c3c" />
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    marginBottom: 12,
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495e',
  },
});

export default MenuItemComponent;