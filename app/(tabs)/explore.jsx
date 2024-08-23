import { StyleSheet, View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();
  
  return (
    <>
      <View style={styles.containerButtons}>
          <Text style={styles.titleContainer}>SmartVsion</Text>
          <View style={styles.buttonContainer}>
            <Button 
              title='Login'
              onPress={() => router.push("/login")}
            />
            <Button 
              title='Register'
              onPress={() => router.push("/register")}
            />
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    gap: 10
  },
  titleContainer: {
    textAlign: "center",
    fontSize: 30,
    margin: 10
  },
  containerButtons: {
    padding: 10
  }
});
