import React from 'react';
import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
export type TableTypes = {
  tableData: any;
  tableHeaders: Array<string>;
};

const TableComponent = (props: TableTypes) => {
  const {tableData, tableHeaders} = props;

  return (
    <View>
      <DataTable style={styles.tableContainer}>
        <DataTable.Header style={styles.tableHeader}>
          {tableHeaders?.map((item: any) => (
            <DataTable.Title textStyle={styles.tableTitle} key={item}>
              {item}
            </DataTable.Title>
          ))}
        </DataTable.Header>
        <FlatList
          data={tableData}
          renderItem={(item: any) => {
            return (
              <DataTable.Row>
                <DataTable.Cell textStyle={styles.tableTitle}>
                  {item?.item?.userId?.username}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.tableTitle}>
                  {item?.item?.lsk}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.tableTitle}>
                  {item?.item?.number}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.tableTitle}>
                  {item?.item?.count}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.tableTitle}>
                  {item?.item?.amountC}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.tableTitle}>
                  {item?.item?.amountD}
                </DataTable.Cell>
                <DataTable.Cell style={{justifyContent: 'center', flex: 0.3}}>
                  <Pressable onPress={() => Alert.alert('PLease Try Later!!!')}>
                    <Icon name="delete" size={12} color={'#000'} />
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
