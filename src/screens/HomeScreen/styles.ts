import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    paddingHorizontal: 20,
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
  inputWidth50: {
    width: '47%',
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
  buttonSpecial: {
    paddingVertical: 12,
    minWidth: '48%',
    borderRadius: 5,
    // backgroundColor: '#E7E7FF',
  },
  bottomInputBoxes: {
    backgroundColor: '#F2F4F5',
    paddingHorizontal: 20,
  },
  bottomContainer: {
    marginVertical: 10,
  },
  inputBottom: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: '#ffffff',
    // width: '30%',
  },
  buttonBottom: {
    paddingVertical: 12,
    minWidth: '20%',
    borderRadius: 5,
    marginVertical: 10,
  },
  bottomButtonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default styles;
