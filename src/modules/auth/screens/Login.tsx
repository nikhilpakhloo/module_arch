import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from '../../../common/providers/ThemeProvider';
import { useAuth } from '../hooks/useAuth';
import { useKeyboard } from '../../../common/hooks';

const Login = () => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const { keyboardShown, keyboardHeight } = useKeyboard();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) return;
    login(email, password);
  };

  return (
    <View 
      style={[
        styles.container, 
        { 
          backgroundColor: theme.colors.background,
          paddingBottom: keyboardShown ? keyboardHeight : 0,
        }
      ]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Login
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor={theme.colors.textSecondary}
        value={email}
        onChangeText={setEmail}
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.card,
            color: theme.colors.text,
            borderColor: theme.colors.border,
          },
        ]}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={theme.colors.textSecondary}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.card,
            color: theme.colors.text,
            borderColor: theme.colors.border,
          },
        ]}
      />

      <Pressable
        onPress={handleSubmit}
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
      >
        <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>
          Login
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
