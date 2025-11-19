import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const findUsers = async () => {
    const response = await fetch('http://localhost:3000/users')
    const data = await response.json()

    console.log(data);
    
  }

  const login = async () => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {email, password}
      )
    })
    const data = await response.json()

    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text>Flamengoooo!</Text>

      <TextInput
        value={email}
        placeholder='E-mail'
        onChangeText={setEmail}
      >
      </TextInput>

      <TextInput
        value={password}
        placeholder='Senha'
        onChangeText={setPassword}
      >
      </TextInput>

      <TouchableOpacity onPress={login}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={findUsers}>
        <Text>BUSCAR USUARIOS</Text>
      </TouchableOpacity>

     
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
