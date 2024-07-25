import React from "react";
import {Text, View } from 'react-native';
import styles from "./style";

export default function Title() {
  return (
    <View style={styles.BoxTitle}>
      <Text style ={styles.texTitle}>Onbithealth</Text>
      <Text>23/07/2024</Text>
      <Text>Aula 2 parte 3</Text>
      
    </View>
  );
}

