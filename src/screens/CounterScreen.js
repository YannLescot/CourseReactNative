import React, {useState} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return ( <View>
        <Button
            title="augmenter"
            onPress={() => {
                setCounter(counter + 1);
            }}
        />

        <Button
            title="diminuer"
            onPress={() => {
                setCounter(counter - 1);
            }}
        />
    <Text>Valeur actuelle: {counter}</Text>
    </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen