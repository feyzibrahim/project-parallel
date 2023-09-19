import React, {useState} from 'react';
import {
  View,
  FlatList,
  Pressable,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';

type Item = {
  id: string;
  name: string;
};

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const TablePage: React.FC<HomeScreenProps> = ({navigation}) => {
  const [data, setData] = useState<Item[]>([
    {id: '1', name: 'John'},
    {id: '2', name: 'Alice'},
    {id: '3', name: 'Bob'},
    // Add more rows as needed
  ]);

  const handleDelete = (id: string) => {
    // Implement your delete logic here, e.g., remove the item from the data array
    const newData = data.filter(item => item.id !== id);
    setData(newData);
    Alert.alert('Item Deleted');
  };

  return (
    <SafeAreaWrapper containerStyle={styles.container} statusbar={'#F2F4F5'}>
      <View style={styles.profileHeader}>
        <View>
          <Text style={styles.headerText}>Package Manager</Text>
        </View>
      </View>
      <View style={styles.container}>
        <DataTable style={styles.table}>
          <DataTable.Header>
            <DataTable.Title>Title</DataTable.Title>
            <DataTable.Title>Action</DataTable.Title>
          </DataTable.Header>

          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <DataTable.Row style={styles.row}>
                <DataTable.Cell style={styles.cell}>{item.name}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>
                  <View style={styles.actions}>
                    <Pressable onPress={() => handleDelete(item.id)}>
                      <Icon name="delete" size={20} color={'#ff0000'} />
                    </Pressable>
                    <Pressable onPress={() => {}}>
                      <Icon name="edit" size={20} color={'#ff0000'} />
                    </Pressable>
                  </View>
                </DataTable.Cell>
              </DataTable.Row>
            )}
          />
        </DataTable>
      </View>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          navigation.navigate('PackageCreateScreen');
        }}>
        <Icon name="addfile" size={18} color={'#ffffff'} />
      </TouchableOpacity>
    </SafeAreaWrapper>
  );
};

export default TablePage;
