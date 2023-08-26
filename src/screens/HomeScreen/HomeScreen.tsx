import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {HomeScreenNavigationProp} from '../../navigations/types';
import styles from './styles';

import GameListBottomUp from '../../components/GameListBottomUp/GameListBottomUp';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import HeaderComponent from '@app/components/HeaderComponent';
import {GameThemes} from '@app/constants/constants';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [isGameListVisible, setGameListVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(1);
  const [selectedButtonABC, setSelectedButtonABC] = useState<number | null>(1);
  const [screenTheme, setScreenTheme] = useState<any>('');

  useEffect(() => {
    colorTheme();
  }, []);

  const openGameList = () => {
    setGameListVisible(true);
    colorTheme();
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

  const colorTheme = () => {
    const primaryColors = GameThemes;
    const backGroundColor =
      primaryColors[Math.floor(Math.random() * primaryColors.length)];
    setScreenTheme(backGroundColor);
    // return backGroundColor;
  };
  // const screenTheme = colorTheme();

  return (
    <SafeAreaWrapper
      containerStyle={styles.container}
      statusbar={screenTheme.primary}>
      <HeaderComponent
        openGameList={openGameList}
        containerStyle={{backgroundColor: screenTheme.primary}}
        buttonStyle={{backgroundColor: screenTheme.secondary}}
        headerTextStyle={{color: screenTheme.secondary}}
      />
      <ScrollView>
        <View style={styles.body}>
          {/* Customer Name */}

          {/* <Text>Customer</Text> */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Choose Customer"
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
                    selectedButton === 1
                      ? screenTheme.secondary
                      : screenTheme.primary,
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
                    selectedButton === 2
                      ? screenTheme.secondary
                      : screenTheme.primary,
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
                    selectedButton === 3
                      ? screenTheme.secondary
                      : screenTheme.primary,
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
            <View style={[styles.inputContainer, styles.inputWidth50]}>
              <TextInput
                style={styles.input}
                placeholder="Number"
                placeholderTextColor="#888"
              />
            </View>
            <View style={[styles.inputContainer, styles.inputWidth50]}>
              <TextInput
                style={styles.input}
                placeholder="Count"
                placeholderTextColor="#888"
              />
            </View>
          </View>

          {/* A, B, C, All buttons */}

          {selectedButton === 1 && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor:
                      selectedButtonABC === 1 ? screenTheme.secondary : screenTheme.primary,
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
                      selectedButtonABC === 2 ? screenTheme.secondary : screenTheme.primary,
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
                      selectedButtonABC === 3 ? screenTheme.secondary : screenTheme.primary,
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
                      selectedButtonABC === 4 ? screenTheme.secondary : screenTheme.primary,
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
          )}
          {selectedButton === 2 && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor:
                      selectedButtonABC === 1 ? screenTheme.secondary : screenTheme.primary,
                  },
                ]}
                onPress={() => handleButtonPressABC(1)}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedButtonABC === 1 && styles.selectedButtonText,
                  ]}>
                  AB
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor:
                      selectedButtonABC === 2 ? screenTheme.secondary : screenTheme.primary,
                  },
                ]}
                onPress={() => handleButtonPressABC(2)}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedButtonABC === 2 && styles.selectedButtonText,
                  ]}>
                  BC
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor:
                      selectedButtonABC === 3 ? screenTheme.secondary : screenTheme.primary,
                  },
                ]}
                onPress={() => handleButtonPressABC(3)}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedButtonABC === 3 && styles.selectedButtonText,
                  ]}>
                  AC
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor:
                      selectedButtonABC === 4 ? screenTheme.secondary : screenTheme.primary,
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
          )}
          {selectedButton === 3 && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonSpecial,
                  {
                    backgroundColor:
                      selectedButtonABC === 1 ? screenTheme.secondary : screenTheme.primary,
                  },
                ]}
                onPress={() => handleButtonPressABC(1)}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedButtonABC === 1 && styles.selectedButtonText,
                  ]}>
                  DEAR
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonSpecial,
                  {
                    backgroundColor:
                      selectedButtonABC === 2 ? screenTheme.secondary : screenTheme.primary,
                  },
                ]}
                onPress={() => handleButtonPressABC(2)}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedButtonABC === 2 && styles.selectedButtonText,
                  ]}>
                  BOX
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Count and Amount */}
        </View>
      </ScrollView>

      <View style={styles.bottomInputBoxes}>
        <View style={styles.horizontalRow}>
          <View style={styles.bottomContainer}>
            <TextInput
              style={styles.inputBottom}
              placeholder="Count"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.bottomContainer}>
            <TextInput
              style={styles.inputBottom}
              placeholder="D Amount"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.bottomContainer}>
            <TextInput
              style={styles.inputBottom}
              placeholder="C Amount"
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity
            style={[
              styles.buttonBottom,
              {
                backgroundColor: screenTheme.secondary,
              },
            ]}
            onPress={() => handleButtonPress(3)}>
            <Text style={[styles.bottomButtonText]}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>

      <GameListBottomUp isVisible={isGameListVisible} onClose={closeGameList} />
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
