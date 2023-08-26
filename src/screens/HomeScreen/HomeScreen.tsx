import React from 'react';
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
import useHomeHook from './useHomeHook';
import {useSelector} from 'react-redux';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {game} = useSelector((state: any) => state?.game);

  const {
    isGameListVisible,
    screenTheme,
    selectedButton,
    selectedButtonABC,
    gameDetail,
    closeGameList,
    handleButtonPress,
    handleButtonPressABC,
    onPressGame,
    openGameList,
  } = useHomeHook();

  return (
    <SafeAreaWrapper
      containerStyle={styles.container}
      statusbar={gameDetail ? gameDetail?.theme?.primary : screenTheme.primary}>
      <HeaderComponent
        openGameList={openGameList}
        containerStyle={{
          backgroundColor: gameDetail
            ? gameDetail?.theme?.primary
            : screenTheme.primary,
        }}
        buttonStyle={{
          backgroundColor: gameDetail
            ? gameDetail?.theme?.secondary
            : screenTheme.secondary,
        }}
        headerTextStyle={{
          color: gameDetail
            ? gameDetail?.theme?.secondary
            : screenTheme.secondary,
        }}
        user={
          game[0]
            ? game[0]?.gameName + ' ' + game[0]?.time
            : gameDetail?.game?.gameName + ' ' + gameDetail?.game?.time
        }
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
                      ? gameDetail
                        ? gameDetail?.theme?.secondary
                        : screenTheme.secondary
                      : gameDetail
                      ? gameDetail?.theme?.primary
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
                      ? gameDetail
                        ? gameDetail?.theme?.secondary
                        : screenTheme.secondary
                      : gameDetail
                      ? gameDetail?.theme?.primary
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
                      ? gameDetail
                        ? gameDetail?.theme?.secondary
                        : screenTheme.secondary
                      : gameDetail
                      ? gameDetail?.theme?.primary
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
                      selectedButtonABC === 1
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.primary
                        : screenTheme.primary,
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
                      selectedButtonABC === 2
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.primary
                        : screenTheme.primary,
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
                      selectedButtonABC === 3
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.primary
                        : screenTheme.primary,
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
                      selectedButtonABC === 4
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.primary
                        : screenTheme.primary,
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
                      selectedButtonABC === 1
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.primary
                        : screenTheme.primary,
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
                      selectedButtonABC === 2
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.primary
                        : screenTheme.primary,
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
                      selectedButtonABC === 3
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.primary
                        : screenTheme.primary,
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
                      selectedButtonABC === 4
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.primary
                        : screenTheme.primary,
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
                      selectedButtonABC === 1
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.primary
                        : screenTheme.primary,
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
                      selectedButtonABC === 2
                        ? gameDetail
                          ? gameDetail?.theme?.secondary
                          : screenTheme.secondary
                        : gameDetail
                        ? gameDetail?.theme?.secondary
                        : screenTheme.primary,
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
                backgroundColor: gameDetail
                  ? gameDetail?.theme?.secondary
                  : screenTheme.secondary,
              },
            ]}
            onPress={() => handleButtonPress(3)}>
            <Text style={[styles.bottomButtonText]}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>

      <GameListBottomUp
        isVisible={isGameListVisible}
        onClose={closeGameList}
        onPressGame={onPressGame}
      />
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
