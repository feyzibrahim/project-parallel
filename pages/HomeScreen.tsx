import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import {HomeScreenNavigationProp} from './types';

type Competition = {
  id: number;
  name: string;
  details: string;
  time: string;
};

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const competitions: Competition[] = [
  {
    id: 1,
    name: 'Dear',
    details: 'Assam',
    time: '1:00 PM',
  },
  {
    id: 2,
    name: 'Dear',
    details: 'Kerala',
    time: '3:00 PM',
  },
  {
    id: 3,
    name: 'Dear',
    details: 'Assam',
    time: '6:00 PM',
  },
  {
    id: 4,
    name: 'Dear',
    details: 'Assam',
    time: '8:00 PM',
  },
];

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const renderItem = ({item}: {item: Competition}) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    let isActive = item.time >= currentTime;

    return (
      <TouchableOpacity
        style={isActive ? styles.cardActive : styles.card}
        onPress={() => navigation.navigate('Details', {itemId: item.id})}>
        <View style={styles.cardFlex}>
          <View>
            <Text style={isActive ? styles.cardTitleActive : styles.cardTitle}>
              {item.name}
            </Text>
            <Text
              style={isActive ? styles.cardDetailsActive : styles.cardDetails}>
              {item.details}
            </Text>
          </View>
          <Text style={isActive ? styles.cardTimeActive : styles.cardTime}>
            {item.time}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={competitions}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#F7F9FA',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardActive: {
    backgroundColor: '#E7E7FF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardTitleActive: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#5538EE',
  },
  cardDetails: {
    fontSize: 16,
    color: '#666',
  },
  cardDetailsActive: {
    fontSize: 16,
    color: '#5538EE',
  },
  cardTime: {
    fontSize: 22,
    fontWeight: '700',
  },
  cardTimeActive: {
    color: '#5538EE',
    fontSize: 22,
    fontWeight: '700',
  },
});

export default HomeScreen;
