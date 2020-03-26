import React, {useReducer} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const VALUE_CHANGING_AMOUNT = 15;

const reducer = (state, action) => {//state = les couleurs et leur valeur, action = la couleur à changer et le montant du changement
                                   //state = { red: 0, green: 0, blue: 0}, action = { toChange : 'red' || 'green' || 'blue', amount : 15 || -15  } 
    switch(action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : {...state, red: state.red + action.payload }; // Pas de return ici car on ne peut pas quand on écrit les conditions comme ça
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : {...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : {...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}

const SquareScreen = () => {

        const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
        const {red, green, blue} = state;

    return(
        <View>
        <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: VALUE_CHANGING_AMOUNT }) }
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 *VALUE_CHANGING_AMOUNT })}
        color="Red"
        />

        <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: VALUE_CHANGING_AMOUNT }) }
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 *VALUE_CHANGING_AMOUNT })}
        color="Green"
        />

        <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: VALUE_CHANGING_AMOUNT }) }
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 *VALUE_CHANGING_AMOUNT })}
        color="Blue"
        />
        
        <View style={{ height: 150, backgroundColor: `rgb(${red},${green},${blue})` }}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen