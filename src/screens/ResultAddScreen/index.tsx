import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {Formik} from 'formik';
import styles from './styles';
import ButtonComponent from '@app/components/ButtonComponent';
import CalendarPicker from 'react-native-calendar-picker';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import InputType from '@app/components/InputType';
import ButtonWithIcon from '@app/components/ButtonWithIcon';
import useResultAddHook from './useResultAddHook';
import TestHeaderComponent from '@app/components/HeaderComponent';

const LotteryForm: React.FC = () => {
  const {
    validationSchema,
    tempGuaranteeInput,
    handleSave,
    initialValues,
    setTempGuaranteeInput,
  } = useResultAddHook();

  return (
    <SafeAreaWrapper statusbar={'#F2F4F5'}>
      <TestHeaderComponent />

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
              <Text
                style={{fontSize: 18, marginVertical: 10, fontWeight: 'bold'}}>
                Publish New Result
              </Text>
              <CalendarPicker
                onDateChange={date => setFieldValue('selectedDate', date)}
              />
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
