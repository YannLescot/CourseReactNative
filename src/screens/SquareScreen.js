import React, {useState} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const VALUE_CHANGING_AMOUNT = 15;

const setColor = (color, change) => { //color sera red blue ou green | change sera VALUE_CHANGING_AMOUNT
    switch (color) {
        case red:
            red + change > 255 || red + change < 0 ? null : setRed(red + VALUE_CHANGING_AMOUNT);
            return;
        case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green + VALUE_CHANGING_AMOUNT);
            return;
        case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + VALUE_CHANGING_AMOUNT);
            return;
        default: //Il faut un case default au cas où nos couleurs ne correspondent ni à red, blue ou green
            return;
    };
};

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return(
        <View>
        <ColorCounter
        onIncrease={() => setColor(red, VALUE_CHANGING_AMOUNT)}
        onDecrease={() => setColor('red', -1 * VALUE_CHANGING_AMOUNT)}
        color="Red"
        />

        <ColorCounter
        onIncrease={() => setColor('green', VALUE_CHANGING_AMOUNT)}
        onDecrease={() => setColor('green', -1 * VALUE_CHANGING_AMOUNT)}
        color="Green"
        />

        <ColorCounter
        onIncrease={() => setColor('blue', VALUE_CHANGING_AMOUNT)}
        onDecrease={() => setColor('blue', -1 * VALUE_CHANGING_AMOUNT)}
        color="Blue"
        
        />
        <View style={{ height: 150, backgroundColor: `rgb(${red},${green},${blue})` }}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen