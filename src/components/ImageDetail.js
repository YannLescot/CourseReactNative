import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>Score : {props.imageScore}/10 !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        
    }
})

export default ImageDetail