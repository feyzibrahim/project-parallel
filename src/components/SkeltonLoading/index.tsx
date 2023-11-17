import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type types = {
  height: number;
};

const SkeltonLoading = (props: types) => {
  const {height} = props;
  const [loadingAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(loadingAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
    ).start();
  }, [loadingAnimation]);

  const translateX = loadingAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-320, 320],
  });

  return (
    <View style={[styles.parent, {height: height}]}>
      <Animated.View style={[{transform: [{translateX}]}]}>
        <LinearGradient
          colors={['#ddd', '#ccc', '#ddd']}
          style={{height: '100%', width: '100%'}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    backgroundColor: '#ccc',
    opacity: 0.5,
    marginBottom: 8,
    overflow: 'hidden',
    borderRadius: 10,
  },
});

export default SkeltonLoading;
