import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

    return(
        <>
            <View>
                <Text style={styleLogin.title}>
                    Login
                </Text>
                <TextInput
                    style={styleLogin.inputStyle}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='Email'
                />
                                <TextInput
                    style={styleLogin.inputStyle}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Password'
                />
                <View style={styleLogin.buttonContainer}>
                    <Button title='Send' />
                </View>
            </View>
        </>
    )
}

const styleLogin = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        margin: 10
    },
    containerInput: {
        margin: 10
    },  
    inputStyle: {
        padding: 20,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    buttonContainer: {
        paddingHorizontal: 30,
        paddingVertical: 10
    }
})

export default Login