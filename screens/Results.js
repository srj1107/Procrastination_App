import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
//import { BarChart, PieChart } from 'react-native-chart-kit';(graph to be added later)

export default function Results () {
    return(
        <View>
          <Header 
            title = "Results"         
          />
          <Text style = {StyleSheet.textContainer}>
            "Procrastinating: "
          </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});