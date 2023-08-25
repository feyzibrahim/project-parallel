import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton, HeaderTitle} from '@react-navigation/elements';
import styles from './styles';

const CreateUserScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = () => {
    // Implement the logic to create a user
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <HeaderBackButton onPress={() => navigation.goBack()} />
      <HeaderTitle>Create User</HeaderTitle>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Create User" onPress={handleCreateUser} />
    </View>
  );
};

export default CreateUserScreen;
