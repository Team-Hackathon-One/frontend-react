import { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, ScrollView,  } from "react-native";
import { Stack, useRouter } from "expo-router"
const Register = () => {
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {username, lastname, email, password}
        try {
            const response = await fetch('http://localhost:3000/api', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
            });
      
            if (response.ok) {
            const data = await response.json();
            console.log("Redirigiendo...")
            router.push("/login")
            } else {
              console.error('Error al registrar el usuario', response.statusText);
            }
          } catch (error) {
            console.log('Error al registrar el usuario', error);
          }
    }

    return(
        <>
            <ScrollView>
            <Stack.Screen options={{title:"Registro"}} />       
                <Text style={stylesRegister.title}>
                    SamartVision
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
                        secureTextEntry={true}
                    />
                </View>
                <View style={stylesRegister.buttonContainer}>
                    <Button title="Send" onPress={handleSubmit}/>
                </View>
            </ScrollView>
        </>
    )
}

const stylesRegister = StyleSheet.create({
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

export default Register
