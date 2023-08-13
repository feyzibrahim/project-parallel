import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: '#5538EE',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputWidth33: {
    width: '30%',
  },
  horizontalRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    minWidth: '30%',
    borderRadius: 5,
    backgroundColor: '#E7E7FF',
  },
  selectedButton: {
    backgroundColor: '#6B4EFF',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  selectedButtonText: {
    color: '#ffffff',
  },
  buttonABC: {
    paddingVertical: 12,
    minWidth: '22%',
    borderRadius: 5,
    backgroundColor: '#E7E7FF',
  },
});

export default styles;
