import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';

//

export default function App() {
  return (
    <Header 
      title = "Procrastinating Now?" 
      subtitle="If yes, why?"/>
  );
}

// const styles = StyleSheet.create({
  
// });
