import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function IndexScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleOperation = (operator: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult(NaN);
      return;
    }

    let res = 0;
    switch (operator) {
      case '+': res = a + b; break;
      case '-': res = a - b; break;
      case '*': res = a * b; break;
      case '/': res = b !== 0 ? a / b : NaN; break;
    }
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.description}>Bu uygulama React Native öğrenme sürecimi anlatıyor.</Text>

      {/* Hesap Makinesi */}
      <Text style={styles.subtitle}>Mini Hesap Makinesi</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="1. sayı"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="2. sayı"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => handleOperation('+')} />
        <Button title="-" onPress={() => handleOperation('-')} />
        <Button title="×" onPress={() => handleOperation('*')} />
        <Button title="÷" onPress={() => handleOperation('/')} />
      </View>

      {result !== null && (
        <Text style={styles.result}>Sonuç: {isNaN(result) ? 'Geçersiz Girdi' : result}</Text>
      )}
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#007AFF',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
});
