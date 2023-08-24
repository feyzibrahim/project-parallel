import React, {useState} from 'react';
import {View, TextInput, Button, ScrollView} from 'react-native';
import styles from './styles';

const LotteryForm: React.FC = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');
  const [numbersArray, setNumbersArray] = useState('');

  const handleAddNumber = () => {
    const numbers = numbersArray
      .split(',')
      .map(num => parseInt(num.trim(), 10));
    setNumbersArray('');
  };

  const handleSubmit = () => {
    const formData = {
      first,
      second,
      third,
      fourth,
      fifth,
      numbersArray,
    };

    // You can now send formData to your backend API
    setFirst('');
    setSecond('');
    setThird('');
    setFourth('');
    setFifth('');
    setNumbersArray('');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="First Prize"
          value={first}
          onChangeText={setFirst}
        />
        <TextInput
          style={styles.input}
          placeholder="Second Prize"
          value={second}
          onChangeText={setSecond}
        />
        <TextInput
          style={styles.input}
          placeholder="Third Prize"
          value={third}
          onChangeText={setThird}
        />
        <TextInput
          style={styles.input}
          placeholder="Fourth Prize"
          value={fourth}
          onChangeText={setFourth}
        />
        <TextInput
          style={styles.input}
          placeholder="Fifth Prize"
          value={fifth}
          onChangeText={setFifth}
        />
        <View style={styles.numbersContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add 3-digit numbers (comma separated)"
            value={numbersArray}
            onChangeText={setNumbersArray}
          />
          <Button title="Add Numbers" onPress={handleAddNumber} />
        </View>
        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

export default LotteryForm;
