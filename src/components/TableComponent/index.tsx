import React from 'react';
import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
export type TableTypes = {
  tableData: any
};
const TableComponent = (props: TableTypes) => {
  const {tableData} = props;
  return (
    <View>
      <DataTable style={styles.tableContainer}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Customer-Id</DataTable.Title>
          <DataTable.Title>Game-Id</DataTable.Title>
          <DataTable.Title>Created at</DataTable.Title>
          {/* <DataTable.Title>Data</DataTable.Title> */}
          <DataTable.Title>{''}</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={tableData}
          renderItem={(item: any) => {
            return (
              <DataTable.Row>
                <DataTable.Cell>{item?.item?.customerId}</DataTable.Cell>
                <DataTable.Cell>{item?.item?.gameId}</DataTable.Cell>
                <DataTable.Cell>{item?.item?.createdAt}</DataTable.Cell>
                {/* <DataTable.Cell>Data</DataTable.Cell> */}
                <DataTable.Cell style={{justifyContent: 'center'}}>
                  <Pressable onPress={() => Alert.alert('PLease Try Later!!!')}>
                    <Icon name="delete" size={15} color={'#000'} />
                  </Pressable>
                </DataTable.Cell>
              </DataTable.Row>
            );
          }}
        />
      </DataTable>
    </View>
  );
};

export default TableComponent;
