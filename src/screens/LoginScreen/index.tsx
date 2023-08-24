import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {loginwithUsername} from '@app/store/slices/authSlice';
import {AppDispatch} from '@app/store/index';
import {HomeScreenNavigationProp} from '../../navigations/types';
import Icon from 'react-native-vector-icons/Feather';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {ToastAndroid} from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid';

import styles from './styles';
import ButtonComponent from '@app/components/ButtonComponent';
import {COLORS} from '@app/constants/themes';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

type FormType = {
  username: string;
  password: string;
};

const LoginPage: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object({
    username: yup.string().required('Username is required.'),
    password: yup.string().required('Password is required.'),
  });
  const initialValues: FormType = {
    username: '',
    password: '',
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: FormType) => {
      gotoHome(values);
    },
  });

  const gotoHome = async (values: FormType) => {
    // navigation.navigate('BottomTab');
    setIsLoading(true);
    const params: FormType = {
      username: values?.username,
      password: values?.password,
    };
    const resultAction = await dispatch(loginwithUsername(params));
    setIsLoading(false);
    if (loginwithUsername.fulfilled.match(resultAction)) {
      navigation.navigate('BottomTab');
      Keyboard.dismiss();
      formik.resetForm();
      // ToastAndroid.show('Login Success', ToastAndroid.LONG);
    } else {
      const errorResult: any = resultAction?.payload;
      Alert.alert(errorResult?.error);
      console.log('errorResult=====', errorResult);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to Parallel</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#000"
            onChangeText={formik.handleChange('username')}
            value={formik.values.username}
            autoFocus={true}
            onBlur={formik.handleBlur('username')}
            keyboardType="default"
          />
          {formik.errors.username && formik.touched.username ? (
            <Text style={{color: 'red', marginTop: 10}}>
              {formik?.errors.username}
            </Text>
          ) : null}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#000"
            secureTextEntry={!isPasswordVisible}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            onBlur={formik.handleBlur('password')}
            keyboardType="default"
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setIsPasswordVisible(prev => !prev)}>
            {isPasswordVisible ? (
              <Icon name="eye" size={18} color={'#000'} />
            ) : (
              <Icon name="eye-off" size={18} color={'#000'} />
            )}
          </TouchableOpacity>
          {formik.errors.password && formik.touched.password ? (
            <Text style={{color: 'red', marginTop: 10}}>
              {formik?.errors.password}
            </Text>
          ) : null}
        </View>

        <ButtonComponent gotoHome={formik.handleSubmit} buttonLabel={'Login'} />
      </ScrollView>
      {isLoading && (
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default LoginPage;
