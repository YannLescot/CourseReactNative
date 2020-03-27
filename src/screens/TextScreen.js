import React, {useState} from 'react'
import { Text, TextInput, View, StyleSheet} from 'react-native'

const TextScreen = () => {

    const [password, setPassword] = useState('')

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue) }
            />
            {password.length < 5 ? <Text>Your password has to be at least 5 character long</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
    },
})

export default TextScreen