import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, TouchableOpacity, Text, } from 'react-native';
import { loginScreenStyles } from './styles/LoginScreenStyles';

const TelaLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'usuario@example.com' && password === 'senha123') {
      Alert.alert('Login bem-sucedido!');
    } else {
      Alert.alert('Erro', 'Nome ou senha incorretos. Por favor, tente novamente.');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Recuperação de senha', 'Em breve enviaremos instruções para recuperar sua senha.');
  };

  return (
    <View style={loginScreenStyles.container}>
      <Image
        source={require('./assets/LogoHAP.png')}
        style={loginScreenStyles.logo}
        resizeMode="contain"
      />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        style={loginScreenStyles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={loginScreenStyles.input}
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={loginScreenStyles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={loginScreenStyles.button}>
        <Text style={loginScreenStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaLogin;
