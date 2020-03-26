import React, {useReducer} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const reducer = (state, action) => {
    switch(action.type){
    case 'increase':
        return {...state, counter: state.counter + action.payload };
    case 'decrease':
        return {...state, counter: state.counter + action.payload };
    default:
        return state;
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state

    return ( <View>
        <Button
            title="augmenter"
            onPress={() => dispatch({ type: 'increase', payload: 1})}
        />

        <Button
            title="diminuer"
            onPress={() => dispatch({ type: 'decrease', payload: -1})}
        />
    <Text>Valeur actuelle: {counter}</Text>
    </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen