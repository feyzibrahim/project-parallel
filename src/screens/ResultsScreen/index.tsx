import React from 'react';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import DateInputComponent from '@app/components/DateInputComponent';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import TestHeaderComponent from '@app/components/HeaderComponent';
import FloatingActionButton from '@app/components/FloatingButton';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};
const ResultScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaWrapper>
      <TestHeaderComponent />
      <DateInputComponent navigation={navigation} />
      <FloatingActionButton
        iconName="plus"
        onPressButton={() => {
          navigation.navigate('ResultAddScreen');
        }}
        style={null}
      />
    </SafeAreaWrapper>
  );
};

export default ResultScreen;
// Some major changes here just for pushing
