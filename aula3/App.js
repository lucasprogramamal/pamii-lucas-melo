import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native";
import inputbox from './components/Textinput';

export default function App() {
  return (
    <View style={styles.container}>
      <inputbox/>
    </View>
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
