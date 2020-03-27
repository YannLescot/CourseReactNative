import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <View style={styles.Carré1} />
            <View style={styles.Carré2} />
            <View style={styles.Carré3} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Carré1: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        alignSelf: 'flex-start',
    },
    Carré2: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        top: 100,

    },
    Carré3: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
    },

})

export default BoxScreen