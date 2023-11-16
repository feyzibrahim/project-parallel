import React from 'react';

import {View, Text, ScrollView} from 'react-native';

import styles from './styles';

import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import TableComponent from '@app/components/TableComponent';
import useReportHook from './useReportHook';
import TestHeaderComponent from '@app/components/TestHeaderComponent';

const ReportScreen = () => {
  const {screenTheme, gameDetail, bookings, TableHeaders} = useReportHook();

  return (
    <SafeAreaWrapper
      statusbar={gameDetail ? gameDetail?.theme?.primary : screenTheme.primary}>
      <TestHeaderComponent />

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerStyle}>Today Bookings</Text>
          <TableComponent tableData={bookings} tableHeaders={TableHeaders} />
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default ReportScreen;
