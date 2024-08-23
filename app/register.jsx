import { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet} from "react-native";

const Register = () => {
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return(
        <>
            <View>
                <Text style={stylesRegister.title}>
                    Register
                </Text>

                <View style={stylesRegister.containerInput}>
                    <TextInput 
                        style={stylesRegister.inputStyle}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Username"
                    />
                    <TextInput 
                        style={stylesRegister.inputStyle}
                        value={lastname}
                        onChangeText={setLastname}
                        placeholder="Lastname"
                    />
                    <TextInput 
                        style={stylesRegister.inputStyle}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                    />
                    <TextInput 
                        style={stylesRegister.inputStyle}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Passsword"
                    />
                    <TextInput 
                        style={stylesRegister.inputStyle}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm Passsword"
                    />
                </View>
                <Button title="Send" />
            </View>
        </>
    )
}

const stylesRegister = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center"
    },
    containerInput: {
        margin: 10
    },  
    inputStyle: {
        padding: 20,
        margin: 29,
        borderWidth: 1,
        borderRadius: 5
    }
})

export default Register
