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
import {useDispatch} from 'react-redux';
import {loginwithUsername} from '@app/store/slices/authSlice';
import {AppDispatch} from '@app/store/index';

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

type FormType = {
  username: String;
  password: String;
};

const LoginPage: React.FC<LoginScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const gotoHome = async () => {
    navigation.navigate('BottomTab');
    const params: FormType = {
      username: 'dilu',
      password: 'password',
    };

    const resultAction = await dispatch(loginwithUsername(params));
    console.log('object', resultAction);
    if (loginwithUsername.fulfilled.match(resultAction)) {
      console.log(resultAction);
      navigation.navigate('BottomTab');
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('errorResult=====', errorResult);
    }
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

        <ButtonComponent gotoHome={gotoHome} buttonLabel={'Login'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
