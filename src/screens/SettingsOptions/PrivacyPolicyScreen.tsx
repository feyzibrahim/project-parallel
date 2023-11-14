import AppBar from '@app/components/AppBarComponent';
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const PrivacyPolicyScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar title="Privacy Policy" />
      <View style={styles.content}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.subTitle}>Information We Collect</Text>
        <Text style={styles.description}>
          We collect personal information from users, including name, email
          address, and payment details, to facilitate the lottery system. This
          information is securely stored and used solely for the purpose of
          managing the app.
        </Text>
        <Text style={styles.subTitle}>Data Security</Text>
        <Text style={styles.description}>
          We take data security seriously and implement appropriate measures to
          protect user information. We use industry-standard encryption
          protocols and regularly update our systems to ensure data integrity.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default PrivacyPolicyScreen;
