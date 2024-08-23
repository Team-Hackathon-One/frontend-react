import { StyleSheet, View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();
  
  return (
    <>
      <View style={styles.containerButtons}>
        <Button 
          title='Login'
          onPress={() => router.push("/login")}
        />
        <Button 
          title='Register'
          onPress={() => router.push("/register")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  containerButtons: {
    padding: 10
  }
});
