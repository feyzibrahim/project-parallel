import React, {useState} from 'react';
import {View, FlatList, Pressable, Alert} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import FloatingActionButton from '@app/components/FloatingButton';
import AppBar from '@app/components/AppBarComponent';

type Item = {
  id: string;
  name: string;
};

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const PackageScreen: React.FC<HomeScreenProps> = ({navigation}) => {
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
      <AppBar title="Package Manager" />
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
      <FloatingActionButton
        iconName="addfile"
        onPressButton={() => {
          navigation.navigate('PackageCreateScreen');
        }}
      />
    </SafeAreaWrapper>
  );
};

export default PackageScreen;
