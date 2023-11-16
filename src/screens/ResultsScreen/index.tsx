import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import DateInputComponent from '@app/components/DateInputComponent';
import {HomeScreenNavigationProp} from '@app/navigations/types';
import useResultHook from './useResultHook';
import TestHeaderComponent from '@app/components/TestHeaderComponent';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};
const ResultScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {screenTheme, gameDetail} = useResultHook();

  return (
    <SafeAreaWrapper
      statusbar={gameDetail ? gameDetail?.theme?.primary : screenTheme.primary}>
      <TestHeaderComponent />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1}}>
        <DateInputComponent navigation={navigation} />
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default ResultScreen;
// Some major changes here just for pushing
