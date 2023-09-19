import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import styles from './styles';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';

type FormData = {
  title: string;
  property1: string;
  rate1: string;
  commission1: string;
  property2: string;
  rate2: string;
  commission2: string;
  property3: string;
  rate3: string;
  commission3: string;
  property4: string;
  rate4: string;
  commission4: string;
};

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    property1: '',
    rate1: '',
    commission1: '',
    property2: '',
    rate2: '',
    commission2: '',
    property3: '',
    rate3: '',
    commission3: '',
    property4: '',
    rate4: '',
    commission4: '',
  });

  const handleSave = () => {
    // Implement your save logic here, e.g., send the formData to a server or store it locally.
    console.log('Form Data:', formData);
    // You can reset the form or navigate to another screen after saving.
  };

  return (
    <SafeAreaWrapper containerStyle={styles.container} statusbar={'#F2F4F5'}>
      <View style={styles.profileHeader}>
        <View>
          <Text style={styles.headerText}>Create Package</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({...formData, title: text})}
          value={formData.title}
          placeholder="Enter Title"
        />

        {/* Repeat this block for each property */}
        <Text style={styles.label}>Property 1:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({...formData, property1: text})}
          value={formData.property1}
          placeholder="Property Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({...formData, rate1: text})}
          value={formData.rate1}
          placeholder="Rate"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({...formData, commission1: text})}
          value={formData.commission1}
          placeholder="Commission"
          keyboardType="numeric"
        />

        {/* Repeat this block for properties 2, 3, and 4 */}

        <Button title="Save" onPress={handleSave} />
      </View>
    </SafeAreaWrapper>
  );
};

export default FormPage;
