import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const LanguageScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Language</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Only Supports One Language</Text>
        <Text style={styles.languageOption}>
          English
          <Text style={styles.checkIcon}> ✔</Text>
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
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  languageOption: {
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    marginLeft: 5,
    color: 'green',
  },
});

export default LanguageScreen;
