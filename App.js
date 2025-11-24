import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

export default function App() {
  const [navigation, setNavigation] = useState('')

  const viewPage = () => {
    switch (navigation) {
      case '':
        return <Login navigate={setNavigation}></Login>
        break;
      
      case 'register':
        return <Register navigate={setNavigation}></Register>
        break;

      case 'home':
        return <Home navigate={setNavigation}></Home>
        break;

      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      {viewPage()}
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
