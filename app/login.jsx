import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const Login = () => {

const [text, setText] = useState('')
    return(
        <>
            <View>
                <Text style={styleLogin.title}>
                    Login
                </Text>
                <TextInput
                    style={styleLogin.inputStyle}
                    onChangeText={setText}
                    value={text}
                />
                                <TextInput
                    style={styleLogin.inputStyle}
                    onChangeText={setText}
                    value={text}
                />
                <Button title='Send' />
            </View>
        </>
    )
}

const styleLogin = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center"
    },
    inputStyle: {
        padding: 10,
        margin: 20,
        borderWidth:1,
        borderRadius: 5
    }
})

export default Login