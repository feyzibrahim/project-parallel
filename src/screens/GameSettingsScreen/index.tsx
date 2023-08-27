import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppDispatch} from '@app/store/index';
import {useDispatch, useSelector} from 'react-redux';
import {getGameList} from '@app/store/slices/gameSlice';
import styles from './styles';
import {HomeScreenNavigationProp} from '../../navigations/types';
import {GameThemes} from '@app/constants/constants';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import GameToggleButton from '@app/components/GameToggleComponent';

type NavigationScreenProps = {
  navigation: HomeScreenNavigationProp;
};

type Competition = {
  id: number;
  gameName: string;
  location: string;
  time: string;
  isActive: boolean;
  primary: string;
  secondary: string;
};

const SettingsScreen: React.FC<NavigationScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [gameList, setGameList] = useState<Competition[]>([]);

  useEffect(() => {
    getAvailableGames();
  }, []);
  const getAvailableGames = async () => {
    const resultAction = await dispatch(getGameList(null));
    if (getGameList.fulfilled.match(resultAction)) {
      console.log('GAME Listed=====', resultAction?.payload);
      setGameList(resultAction?.payload);
    } else {
      const errorResult: any = resultAction?.payload;
      console.log('GAME Listed===ERROR=====', errorResult);
    }
  };

  const colorTheme = (index: number) => {
    const primaryColors = GameThemes;
    return primaryColors[index];
  };

  return (
    <SafeAreaWrapper containerStyle={styles.container} statusbar={'#F2F4F5'}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Game Settings</Text>
        </View>
      </View>
      <View style={styles.gameList}>
        {gameList?.map((item, index) => {
          // const bgCOLOR = colorTheme(index);
          return (
            <GameToggleButton
              gameName={item.gameName}
              location={item.location}
              time={item.time}
              index={index}
              isActive={item.isActive}
              key={index}
            />
            // <View
            //   key={index}
            //   style={{...styles.card, backgroundColor: bgCOLOR?.primary}}>
            //   <View style={styles.cardFlex}>
            //     <View>
            //       <View style={styles.nameFlex}>
            //         <Text
            //           style={{...styles.cardTitle, color: bgCOLOR?.secondary}}>
            //           {item?.gameName}
            //         </Text>
            //         <Text
            //           style={{...styles.cardTime, color: bgCOLOR?.secondary}}>
            //           | {item?.location}
            //         </Text>
            //       </View>
            //       <Text
            //         style={{...styles.cardDetails, color: bgCOLOR?.secondary}}>
            //         {item?.time}
            //       </Text>
            //     </View>
            //     <Text style={{...styles.cardTime, color: bgCOLOR?.secondary}}>
            //       {item?.isActive.toString()}
            //     </Text>
            //   </View>
            // </View>
          );
        })}
      </View>
    </SafeAreaWrapper>
  );
};

export default SettingsScreen;
