import React from 'react';
import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const TableComponent = () => {
  return (
    <View>
      <DataTable style={styles.tableContainer}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Data</DataTable.Title>
          <DataTable.Title>Data</DataTable.Title>
          <DataTable.Title>Data</DataTable.Title>
          <DataTable.Title>Data</DataTable.Title>
          <DataTable.Title>{''}</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={Array(6).fill(6)}
          renderItem={() => {
            return (
              <DataTable.Row>
                <DataTable.Cell>Data</DataTable.Cell>
                <DataTable.Cell>Data</DataTable.Cell>
                <DataTable.Cell>Data</DataTable.Cell>
                <DataTable.Cell>Data</DataTable.Cell>
                <DataTable.Cell style={{justifyContent:'center'}}>
                  <Pressable onPress={()=>Alert.alert('PLease Try Later!!!')} >
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
