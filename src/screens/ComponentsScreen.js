import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    var name = "Yann"

    return( <View>
            <Text style={styles.textStyle}>Getting started with React Native !</Text>
            <Text style={styles.subText}>My name is {name}</Text>
            </View> )
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 45,
    },
    subText: {
        fontSize: 20,
    }
})

export default ComponentsScreen;