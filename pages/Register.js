import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function Register({navigate}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profile, setProfile] = useState('')

  const register = async () => {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {name, email, password, profile}
      )
    })
    const data = await response.json()

    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text>Registro</Text>

      <TextInput
        value={name}
        placeholder='Nome'
        onChangeText={setName}
      >
      </TextInput>

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

       <TextInput
        value={profile}
        placeholder='Perfil'
        onChangeText={setProfile}
      >
      </TextInput>

      <TouchableOpacity onPress={register}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('')}>
        <Text>Login</Text>
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
