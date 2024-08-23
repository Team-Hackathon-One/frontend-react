import { useState } from "react"
import { TextInput, View, Text, StyleSheet, Button } from "react-native"

const Chat = () => {

    const [text, setText] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/chat', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(text),
            });
      
            if (response.ok) {
            const data = await response.json();
            console.log("respuesta:", response)
            } else {
              console.error('Error al hacer la peticion', response.statusText);
            }
          } catch (error) {
            console.log('Error al preguntar al chat', error);
          }
    }

    return(
        <>
            <View>
                <Text style={stylesChat.title}>SmartView</Text>
                <View style={stylesChat.containerInput}>
                <TextInput 
                    style={stylesChat.inputStyle}
                    value={text}
                    onChangeText={setText}
                />
                <Button title="Send" onPress={handleSubmit} />
                </View>
            </View>
        </>
    )
}

const stylesChat = StyleSheet.create({
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

export default Chat