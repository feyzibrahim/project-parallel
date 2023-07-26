import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Project Parallel</Text>
        <Text style={styles.version}>Version: 1.0.0</Text>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.description}>
          This app is designed to manage a lottery system. It allows users to
          participate in the lottery games and track their winnings. The admin
          has control over managing the games, users, and their orders. Users
          can deposit money into their wallets and see their updated balance
          when they win a game.
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  version: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default AboutScreen;
