import React,{useState} from 'react'

import { View, Text } from 'react-native'
import styles from './styles'
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper'
import { COLORS } from '@app/constants/themes'
import HeaderComponent from '@app/components/HeaderComponent'
import GameListBottomUp from '../GameListBottomUp/GameListBottomUp'

const ReportScreen = () => {
  const [isGameListVisible, setGameListVisible] = useState(false);

  const openGameList = () => {
    console.log('object')
    setGameListVisible(true);
  };

  const closeGameList = () => {
    setGameListVisible(false);
  };

  return (
    <SafeAreaWrapper containerStyle={styles.container} statusbar={COLORS.darkBlueShade}>
      <HeaderComponent openGameList={openGameList}/>
    <View style={styles.container}>
      <Text>Report Screen</Text>
    </View>
    <GameListBottomUp isVisible={isGameListVisible} onClose={closeGameList} />
    </SafeAreaWrapper>
  )
}

export default ReportScreen