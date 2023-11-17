import React from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import styles from './styles';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import TableComponent from '@app/components/TableComponent';
import useReportHook from './useReportHook';
import TestHeaderComponent from '@app/components/HeaderComponent';
import {ActivityIndicator} from 'react-native-paper';

const ReportScreen = () => {
  const {screenTheme, bookings, loading, TableHeaders, refreshing, onRefresh} =
    useReportHook();

  if (loading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaWrapper statusbar={screenTheme.primary}>
      <TestHeaderComponent />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.container}>
          <Text style={styles.headerStyle}>Today Bookings</Text>
          {bookings.length > 0 ? (
            <TableComponent tableData={bookings} tableHeaders={TableHeaders} />
          ) : (
            <Text>No bookings yet</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default ReportScreen;
