import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
// import nommé depuis CardList.js
import { CardList } from './components/CardList';
export default function App() {
 return (
 < View style={styles.screen}>
 <StatusBar />
 <CardList />
 </ View >
 );
}
const styles = StyleSheet.create({
 screen: { flex: 1, backgroundColor: '#f6f7fb' }
}); 