import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20, // Adjust the distance from the bottom
    right: 20, // Adjust the distance from the right
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Adds a shadow on Android
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
