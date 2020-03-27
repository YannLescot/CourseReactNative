import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
  <Text style={styles.text}>le beau jeu</Text>
    <Button 
      title="Go to Component" 
      onPress={() => navigation.navigate('Component')}
    />

    <Button 
      title="Go to List" 
      onPress={() => navigation.navigate('Lists')}
    />

    <Button 
      title="Go to Images" 
      onPress={() => navigation.navigate('Images')}
    />

    <Button 
      title="Go to Counter" 
      onPress={() => navigation.navigate('Counter')}
    />

    <Button 
      title="Go to Colors" 
      onPress={() => navigation.navigate('Colors')}
    />

    <Button 
      title="Go to Square" 
      onPress={() => navigation.navigate('Square')}
    />

    <Button 
      title="Go to Text" 
      onPress={() => navigation.navigate('Text')}
    />

    </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
