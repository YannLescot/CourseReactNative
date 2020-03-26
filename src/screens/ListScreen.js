import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'friend1', age: '15'},
        { name: 'friend2', age: '25'},
        { name: 'friend3', age: '53'},
        { name: 'friend4', age: '21'},
        { name: 'friend5', age: '18'},
        { name: 'friend6', age: '17'},
        { name: 'friend7', age: '24'},
        { name: 'friend8', age: '22'},
        { name: 'friend9', age: '20'},
    ] 

    return(
        <FlatList
        keyExtractor={friends => friends.name}
        data={friends}
        renderItem={({item}) => {
            return <Text style={styles.txt}>{item.name} - Age {item.age}</Text>
        }} />

    )
}

const styles = StyleSheet.create({
    txt: {
        marginVertical: 50,
    },
})

export default ListScreen