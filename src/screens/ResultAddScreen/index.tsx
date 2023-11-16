import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {Formik} from 'formik';
import styles from './styles';
import ButtonComponent from '@app/components/ButtonComponent';
import AppBar from '@app/components/AppBarComponent';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import * as Yup from 'yup';
import InputType from '@app/components/InputType';
import ButtonWithIcon from '@app/components/ButtonWithIcon';

const LotteryForm: React.FC = () => {
  const initialValues = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    guarantee: [] as number[],
  };

  const validationSchema = Yup.object().shape({
    first: Yup.number()
      .required('First Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    second: Yup.number()
      .required('Second Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    third: Yup.number()
      .required('Third Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    fourth: Yup.number()
      .required('Fourth Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    fifth: Yup.number()
      .required('Fifth Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    guarantee: Yup.array().of(
      Yup.number()
        .integer('No point value')
        .min(100)
        .max(999)
        .typeError('Only Number'),
    ),
  });

  const handleSave = (values: typeof initialValues) => {
    console.log('Form Data:', values);
  };

  const [tempGuaranteeInput, setTempGuaranteeInput] = useState('');

  return (
    <SafeAreaWrapper statusbar={'#F2F4F5'}>
      <AppBar title="Add Today's Result" />
      <ScrollView keyboardShouldPersistTaps="handled">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSave}>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <View style={styles.container}>
              <InputType
                name="first"
                label="First Prize"
                placeholder="Enter First Prize"
                onChangeText={handleChange('first')}
                onBlur={handleBlur('first')}
                value={values.first}
                keyboardType="numeric"
              />
              <InputType
                name="second"
                label="Second Prize"
                placeholder="Enter Second Prize"
                onChangeText={handleChange('second')}
                onBlur={handleBlur('second')}
                value={values.second}
                keyboardType="numeric"
              />
              <InputType
                name="third"
                label="Third Prize"
                placeholder="Enter Third Prize"
                onChangeText={handleChange('third')}
                onBlur={handleBlur('third')}
                value={values.third}
                keyboardType="numeric"
              />
              <InputType
                name="fourth"
                label="Fourth Prize"
                placeholder="Enter Fourth Prize"
                onChangeText={handleChange('fourth')}
                onBlur={handleBlur('fourth')}
                value={values.fourth}
                keyboardType="numeric"
              />
              <InputType
                name="fifth"
                label="Fifth Prize"
                placeholder="Enter Fifth Prize"
                onChangeText={handleChange('fifth')}
                onBlur={handleBlur('fifth')}
                value={values.fifth}
                keyboardType="numeric"
              />

              {/* Display entered numbers */}
              <View style={{paddingVertical: 10}}>
                {values.guarantee.map((number, index) => (
                  <Text key={index}>{number}</Text>
                ))}
              </View>

              <View style={styles.numbersContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Guarantee Numbers"
                  onChangeText={text => setTempGuaranteeInput(text)}
                  value={tempGuaranteeInput}
                  keyboardType="numeric"
                />
                <ButtonWithIcon
                  buttonLabel={'Add'}
                  fun={() => {
                    if (tempGuaranteeInput !== '') {
                      setFieldValue('guarantee', [
                        ...values.guarantee,
                        parseInt(tempGuaranteeInput, 10),
                      ]);
                      setTempGuaranteeInput('');
                    }
                  }}
                />
              </View>
              <ButtonComponent gotoHome={handleSubmit} buttonLabel={'Submit'} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default LotteryForm;
