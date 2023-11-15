import React, {useEffect} from 'react';
import {View, FlatList, Pressable} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import FloatingActionButton from '@app/components/FloatingButton';
import AppBar from '@app/components/AppBarComponent';
import {useSelector, useDispatch} from 'react-redux';
import {
  getPackages,
  deletePackage,
} from '@app/store/actions/admin/packageActions';
import {AppDispatch} from '@app/store/index';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const PackageScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {packages} = useSelector((state: any) => state?.packages);

  const dispatch = useDispatch<AppDispatch>();

  const dispatchGetPackages = () => {
    dispatch(getPackages(null));
  };
  const dispatchDeletePackage = (id: string) => {
    dispatch(deletePackage(id));
  };

  useEffect(() => {
    dispatchGetPackages();
  }, []);

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
            data={packages}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <DataTable.Row style={styles.row} key={item._id}>
                <DataTable.Cell style={styles.cell}>{item.name}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>
                  <View style={styles.actions}>
                    <Pressable
                      onPress={() => {
                        dispatchDeletePackage(item._id);
                      }}>
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
