import React from 'react';
import {Field, ErrorMessage, FieldProps} from 'formik';
import {Text, TextInput} from 'react-native';
import styles from './styles';

interface FormFieldProps {
  name: string;
  label: string;
  placeholder: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  onChangeText?: (text: string) => void;
  onBlur?: (e: any) => void;
  value: any;
}

const InputType: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  keyboardType = 'default',
  onChangeText,
  onBlur,
  value,
}) => (
  <>
    <Text style={styles.label}>{label}:</Text>
    <Field name={name}>
      {({field}: FieldProps) => (
        <>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={onChangeText ? onChangeText : field.onChange(name)}
            onBlur={onBlur ? onBlur : field.onBlur}
            value={value ? value : field.value}
          />
        </>
      )}
    </Field>
    <ErrorMessage name={name} component={Text}>
      {error => <Text style={styles.errorText}>{error}</Text>}
    </ErrorMessage>
  </>
);

export default InputType;
