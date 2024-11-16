import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Alert } from 'react-native';

export default function App() {
  
  const handlePress = () => {alert('Text Pressed!')}



  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Hello World!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
