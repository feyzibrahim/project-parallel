import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import {Formik} from 'formik';
import InputType from '@app/components/InputType';
import * as Yup from 'yup';
import AppBar from '@app/components/AppBarComponent';
import ButtonComponent from '@app/components/ButtonComponent';
import {createPackage} from '@app/store/actions/admin/packageActions';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@app/store/index';
import {PackageFormData} from '@app/types/common';
import {useNavigation} from '@react-navigation/native';

const PackageCreateScreen: React.FC = ({}) => {
  // Dispatch Hook
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  // Type of the form data

  // Formik Initial Value setting
  const initialValues: PackageFormData = {
    title: '',
    singleRate: '',
    singleCommission: '',
    doubleRate: '',
    doubleCommission: '',
    lskSuperRate: '',
    lskSuperCommission: '',
    boxRate: '',
    boxCommission: '',
  };

  // Formik Schema for validation
  const packageSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    singleRate: Yup.number()
      .typeError('Single Rate must be a number')
      .required('Single Rate is required'),
    singleCommission: Yup.number()
      .typeError('Single Commission must be a number')
      .required('Single Commission is required'),
    doubleRate: Yup.number()
      .typeError('Double Rate must be a number')
      .required('Double Rate is required'),
    doubleCommission: Yup.number()
      .typeError('Double Commission must be a number')
      .required('Double Commission is required'),
    lskSuperRate: Yup.number()
      .typeError('LSK Super Rate must be a number')
      .required('LSK Super Rate is required'),
    lskSuperCommission: Yup.number()
      .typeError('LSK Super Commission must be a number')
      .required('LSK Super Commission is required'),
    boxRate: Yup.number()
      .typeError('Box Rate must be a number')
      .required('Box Rate is required'),
    boxCommission: Yup.number()
      .typeError('Box Commission must be a number')
      .required('Box Commission is required'),
  });

  const handleSave = (values: PackageFormData) => {
    // console.log('Form Data:', values);
    const packageData = {
      name: values.title,
      single: {
        rate: parseFloat(values.singleRate),
        commission: parseFloat(values.singleCommission),
      },
      double: {
        rate: parseFloat(values.doubleRate),
        commission: parseFloat(values.doubleCommission),
      },
      lskSuper: {
        rate: parseFloat(values.lskSuperRate),
        commission: parseFloat(values.lskSuperCommission),
      },
      box: {
        rate: parseFloat(values.boxRate),
        commission: parseFloat(values.boxCommission),
      },
    };
    dispatch(createPackage(packageData)).then(() => {
      navigation.goBack();
    });
  };

  return (
    <SafeAreaWrapper statusbar={'#F2F4F5'}>
      <AppBar title="Package Manager" />

      <ScrollView>
        <View style={styles.container}>
          <Formik
            initialValues={initialValues}
            validationSchema={packageSchema}
            onSubmit={handleSave}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View style={styles.container}>
                <InputType
                  name="title"
                  label="Title"
                  placeholder="Enter Title"
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                />
                <InputType
                  name="singleRate"
                  label="Single Rate"
                  placeholder="Enter Single Rate"
                  keyboardType="numeric"
                  onChangeText={handleChange('singleRate')}
                  onBlur={handleBlur('singleRate')}
                  value={values.singleRate}
                />
                <InputType
                  name="singleCommission"
                  label="Single Commission"
                  placeholder="Enter Single Commission"
                  keyboardType="numeric"
                  onChangeText={handleChange('singleCommission')}
                  onBlur={handleBlur('singleCommission')}
                  value={values.singleCommission}
                />
                <InputType
                  name="doubleRate"
                  label="Double Rate"
                  placeholder="Enter Double Rate"
                  keyboardType="numeric"
                  onChangeText={handleChange('doubleRate')}
                  onBlur={handleBlur('doubleRate')}
                  value={values.doubleRate}
                />
                <InputType
                  name="doubleCommission"
                  label="Double Commission"
                  placeholder="Enter Double Commission"
                  keyboardType="numeric"
                  onChangeText={handleChange('doubleCommission')}
                  onBlur={handleBlur('doubleCommission')}
                  value={values.doubleCommission}
                />
                <InputType
                  name="lskSuperRate"
                  label="LSK Super Rate"
                  placeholder="Enter LSK Super Rate"
                  keyboardType="numeric"
                  onChangeText={handleChange('lskSuperRate')}
                  onBlur={handleBlur('lskSuperRate')}
                  value={values.lskSuperRate}
                />
                <InputType
                  name="lskSuperCommission"
                  label="LSK Super Commission"
                  placeholder="Enter LSK Super Commission"
                  keyboardType="numeric"
                  onChangeText={handleChange('lskSuperCommission')}
                  onBlur={handleBlur('lskSuperCommission')}
                  value={values.lskSuperCommission}
                />
                <InputType
                  name="boxRate"
                  label="Box Rate"
                  placeholder="Enter Box Rate"
                  keyboardType="numeric"
                  onChangeText={handleChange('boxRate')}
                  onBlur={handleBlur('boxRate')}
                  value={values.boxRate}
                />
                <InputType
                  name="boxCommission"
                  label="Box Commission"
                  placeholder="Enter Box Commission"
                  keyboardType="numeric"
                  onChangeText={handleChange('boxCommission')}
                  onBlur={handleBlur('boxCommission')}
                  value={values.boxCommission}
                />
                {/* <CustomButton title="Save" onPress={handleSubmit} /> */}
                <View style={styles.container}>
                  <ButtonComponent
                    gotoHome={handleSubmit}
                    buttonLabel={'Save'}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default PackageCreateScreen;
