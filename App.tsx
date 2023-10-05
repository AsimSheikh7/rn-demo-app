import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const TestApp = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setDarkMode] = useState(false);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  const counterReset = () => {
    setCount(0);
  };
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
  };

  const textStyle = {
    ...styles.text,
    color: isDarkMode ? '#FFFFFF' : '#000000',
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isDarkMode ? '#4287f5' : '#0066cc',
  };

  return (
    <SafeAreaView>
      <View style={containerStyle}>
        <TouchableOpacity style={buttonStyle} onPress={toggleDarkMode}>
          <Text>Click to switch Color Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={incrementCounter}>
          <Text style={textStyle}>Touch Counter = {count}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={buttonStyle} onPress={counterReset}>
            Reset Counter
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: '#4287f5',
    padding: 14,
    borderRadius: 5,
  },
});

export default TestApp;
