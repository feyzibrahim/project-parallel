import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {HomeScreenNavigationProp} from '../../navigations/types';
import styles from './styles';
import GameListBottomUp from '../../components/GameListBottomUp/GameListBottomUp';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import HeaderComponent from '@app/components/HeaderComponent';
import {COLORS} from '@app/constants/themes';
import {GameThemes} from '@app/constants/constants';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [isGameListVisible, setGameListVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(1);
  const [selectedButtonABC, setSelectedButtonABC] = useState<number | null>(1);

  const openGameList = () => {
    setGameListVisible(true);
  };

  const closeGameList = () => {
    setGameListVisible(false);
  };

  const handleButtonPress = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };
  const handleButtonPressABC = (buttonNumber: number) => {
    setSelectedButtonABC(buttonNumber);
  };

  // useEffect(() => {
  //   navigation.setOptions({
  //     // headerTitle: 'Dear 1:00 PM',
  //     headerRight: () => (
  //       <TouchableOpacity style={styles.logoutButton} onPress={openGameList}>
  //         <Text style={styles.logoutButtonText}>Change</Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  const colorTheme = () => {
    const primaryColors = GameThemes;
    const backGroundColor =
      primaryColors[Math.floor(Math.random() * primaryColors.length)];
    return backGroundColor;
  };
  const Color = colorTheme();

  return (
    <SafeAreaWrapper
      containerStyle={styles.container}
      statusbar={Color.primary}>
      <HeaderComponent
        openGameList={openGameList}
        containerStyle={{backgroundColor: Color.primary}}
        buttonStyle={{backgroundColor: Color.secondary}}
        headerTextStyle={{color: Color.secondary}}
      />
      <ScrollView>
        <View style={styles.body}>
          {/* Customer Name */}

          <Text>Customer</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Customer"
              placeholderTextColor="#888"
            />
          </View>

          {/* 1, 2, 3 buttons */}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor:
                    selectedButton === 1 ? Color.secondary : Color.primary,
                },
              ]}
              onPress={() => handleButtonPress(1)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === 1 && styles.selectedButtonText,
                ]}>
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor:
                    selectedButton === 2 ? Color.secondary : Color.primary,
                },
              ]}
              onPress={() => handleButtonPress(2)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === 2 && styles.selectedButtonText,
                ]}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor:
                    selectedButton === 3 ? Color.secondary : Color.primary,
                },
              ]}
              onPress={() => handleButtonPress(3)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === 3 && styles.selectedButtonText,
                ]}>
                3
              </Text>
            </TouchableOpacity>
          </View>

          {/* Number, Count, B Count textInputs */}

          <View style={styles.horizontalRow}>
            <View style={[styles.inputContainer, styles.inputWidth33]}>
              <TextInput
                style={styles.input}
                placeholder="Number"
                placeholderTextColor="#888"
              />
            </View>
            <View style={[styles.inputContainer, styles.inputWidth33]}>
              <TextInput
                style={styles.input}
                placeholder="Count"
                placeholderTextColor="#888"
              />
            </View>
            <View style={[styles.inputContainer, styles.inputWidth33]}>
              <TextInput
                style={styles.input}
                placeholder="B Count"
                placeholderTextColor="#888"
              />
            </View>
          </View>

          {/* A, B, C, All buttons */}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.buttonABC,
                {
                  backgroundColor:
                    selectedButton === 1 ? Color.secondary : Color.primary,
                },
              ]}
              onPress={() => handleButtonPressABC(1)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButtonABC === 1 && styles.selectedButtonText,
                ]}>
                A
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonABC,
                {
                  backgroundColor:
                    selectedButton === 2 ? Color.secondary : Color.primary,
                },
              ]}
              onPress={() => handleButtonPressABC(2)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButtonABC === 2 && styles.selectedButtonText,
                ]}>
                B
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonABC,
                {
                  backgroundColor:
                    selectedButton === 3 ? Color.secondary : Color.primary,
                },
              ]}
              onPress={() => handleButtonPressABC(3)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButtonABC === 3 && styles.selectedButtonText,
                ]}>
                C
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonABC,
                {
                  backgroundColor:
                    selectedButton === 3 ? Color.secondary : Color.primary,
                },
              ]}
              onPress={() => handleButtonPressABC(4)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButtonABC === 4 && styles.selectedButtonText,
                ]}>
                All
              </Text>
            </TouchableOpacity>
          </View>

          {/* Count and Amount */}
        </View>
      </ScrollView>

      <GameListBottomUp isVisible={isGameListVisible} onClose={closeGameList} />
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
