import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import useTestScreenHook from './useTestScreenHook';
import TestHeaderComponent from '../../components/TestHeaderComponent';

const TestScreen = () => {
  const {game, games, handleItemPress} = useTestScreenHook();

  return (
    <View>
      {game && <TestHeaderComponent />}
      <Text>TestScreen</Text>
      {games && (
        <FlatList
          data={games}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                handleItemPress(item._id);
                console.log('Button Pressed:', item._id);
              }}
              style={({pressed}) => ({
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              })}>
              <View style={{flexDirection: 'row', gap: 10, padding: 10}}>
                <Text>{item.gameName}</Text>
                <Text>{item.time}</Text>
                <Text>{item.location}</Text>
              </View>
            </Pressable>
          )}
        />
      )}
      {game && (
        <View style={{marginTop: 50}}>
          <Text>Selected by default</Text>
          <Text>{game.gameName}</Text>
          <Text>{game.time}</Text>
          <Text>{game.location}</Text>
          <Text>{game._id}</Text>
        </View>
      )}
    </View>
  );
};

export default TestScreen;
