import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 48,
    marginBottom: 20,
    textAlign: 'right',
    width: '100%',
    overflow: 'hidden',
    color: '#000',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    width: '23%',
    height: 90,
    margin: '1%',
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});
export default styles;
