import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './styles';
import ButtonComponent from '@app/components/ButtonComponent';
import {LoginScreenNavigationProp} from '../../navigations/types';

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

const LoginPage: React.FC<LoginScreenProps> = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const gotoHome = () => {
    navigation.navigate('BottomTab');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to Parallel</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setIsPasswordVisible(prev => !prev)}>
            <Text style={styles.passwordToggleText}>
              {isPasswordVisible ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>

        <ButtonComponent gotoHome={gotoHome} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
