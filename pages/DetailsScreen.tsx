import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {DetailsScreenNavigationProp} from './types';

type DetailsScreenProps = {
  navigation: DetailsScreenNavigationProp;
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({navigation}) => {
  //   const {itemId} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Details Screen</Text>
      </View>
      <View style={styles.content}>
        <Text>Item ID:</Text>
        {/* <Text>Item ID: {itemId}</Text> */}
        <Text>This is a dummy details screen.</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.goBackButtonText}>Go Back</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  goBackButton: {
    backgroundColor: '#FF6F6F',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
