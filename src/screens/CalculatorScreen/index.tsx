import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';

import {HomeScreenNavigationProp} from '../../navigations/types';

import styles from './styles';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const CalculatorScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {width: screenWidth} = Dimensions.get('window');

  const [result, setResult] = useState('');

  const handleButtonPress = (text: string) => {
    setResult(prevResult => prevResult + text);
  };

  const handleClear = () => {
    setResult('');
  };
  const handleBack = () => {
    const newResult = result.split('');
    newResult.pop();
    setResult(newResult.join(''));
  };

  const handleCalculate = () => {
    if (result.toString() === '0/0') {
      navigation.navigate('Login', {itemId: 1});
      setResult('');
      return;
    }
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <TextInput
            style={[styles.result, {maxWidth: screenWidth}]}
            value={result}
            onChangeText={setResult}
            editable={false}
            placeholder="0"
            placeholderTextColor="#777"
          />
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button]} onPress={handleClear}>
              <Text style={[styles.buttonText, {color: '#FF5733'}]}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => handleButtonPress('/')}>
              <Text style={[styles.buttonText, {color: '#FF5733'}]}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => handleButtonPress('*')}>
              <Text style={[styles.buttonText, {color: '#FF5733'}]}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress={handleBack}>
              <Text style={[styles.buttonText, {color: '#FF5733'}]}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('1')}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('2')}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('3')}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => handleButtonPress('-')}>
              <Text style={[styles.buttonText, {color: '#FF5733'}]}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('4')}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('5')}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('6')}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => handleButtonPress('+')}>
              <Text style={[styles.buttonText, {color: '#FF5733'}]}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('7')}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('8')}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('9')}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress={handleCalculate}>
              <Text style={[styles.buttonText, {color: '#FF5733'}]}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('.')}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('0')}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('%')}>
              <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalculatorScreen;
