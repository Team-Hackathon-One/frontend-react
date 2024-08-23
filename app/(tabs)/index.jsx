import { useState } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import * as ImagePicker from "expo-image-picker"
import { Stack } from 'expo-router'

export default function HomeScreen() {

  const [image, setImage] = useState([])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      cameraType: ImagePicker.CameraType.front,
    })

    console.log("resultados:", result)
  
    if(!result.canceled) {
      setImage(result.assets[0].uri)
      
    }
  }

  return (
    <>
      <View>
        <ScrollView>
          <Stack.Screen options={{title:"Home"}} />
          <Text style={styles.title}>SmartView</Text>

          <View style={styles.imageContainer}>
          {
            image && <Image source={{uri: image}} style={styles.image}  />
          }
          </View>
          <Pressable  onPress={pickImage}>
            <Text style={styles.buttonStyle}>TOMAR FOTO</Text>
          </Pressable>
          
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    
  },
  image: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    margin: "auto",
    borderWidth: 1,
    borderRadius:3,
    padding: 10
  },
  buttonStyle: {
    backgroundColor: "#22a",
    padding: 15,
    marginHorizontal: 60,
    marginVertical: 10, 
    borderRadius: 5,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif"
  }
});
