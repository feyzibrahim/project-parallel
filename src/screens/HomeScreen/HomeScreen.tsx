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
import TableComponent from '@app/components/TableComponent';
import AlertBox from '@app/components/AlertComponent';
import {Modal} from 'react-native-paper';
import CircleCheckMark from '@app/assets/icons/Frame.svg';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {game} = useSelector((state: any) => state?.game);

  const TableHeaders = [
    '',
    'LSK',
    'Number',
    '  Count',
    '₹₹ - D',
    '₹₹ - C',
    '#',
  ];

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
    setCustomer,
    setTicketCount,
    setTicketNumber,
    listData,
    removeTicket,
    onSaveButton,
    setSaveAlert,
    saveAlert,
    successModal,
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
          gameDetail
            ? gameDetail?.game?.gameName + ' ' + gameDetail?.game?.time
            : game[0]?.gameName + ' ' + game[0]?.time
        }
      />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.body}>
          {/* Customer Name */}

          {/* <Text>Customer</Text> */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Choose Customer"
              placeholderTextColor="#888"
              onChangeText={val => {
                setCustomer(val);
              }}
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
                keyboardType="number-pad"
                maxLength={
                  selectedButton == 1 ? 1 : selectedButton == 2 ? 2 : 3
                }
                onChangeText={value => {
                  setTicketNumber(value);
                }}
              />
            </View>
            <View style={[styles.inputContainer, styles.inputWidth50]}>
              <TextInput
                style={styles.input}
                placeholder="Count"
                keyboardType="number-pad"
                placeholderTextColor="#888"
                onChangeText={value => {
                  setTicketCount(value);
                }}
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
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 1, lsk: 'A'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  A
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 2, lsk: 'B'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  B
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 3, lsk: 'C'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  C
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 4, lsk: 'All'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
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
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 1, lsk: 'AB'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  AB
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 2, lsk: 'BC'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  BC
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 3, lsk: 'AC'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  AC
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 4, lsk: 'All'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
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
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 1, lsk: 'DEAR'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  DEAR
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonSpecial,
                  {
                    backgroundColor: gameDetail
                      ? gameDetail?.theme?.secondary
                      : screenTheme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 1, lsk: 'BOX'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  BOX
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <TableComponent
            tableData={listData}
            tableHeaders={TableHeaders}
            onPressDelete={() => removeTicket(listData)}
          />
        </View>
      </ScrollView>
      {/* Count and Amount */}

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
            onPress={() => setSaveAlert(true)}>
            <Text style={[styles.bottomButtonText]}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>

      <AlertBox
        isShowAlert={saveAlert}
        title={'Are You Sure ?'}
        confirmText={'Ok'}
        CancelText={'Cancel'}
        CancelPressed={() => setSaveAlert(false)}
        confirmPressed={() => {
          onSaveButton();
        }}
      />

      <GameListBottomUp
        isVisible={isGameListVisible}
        onClose={closeGameList}
        onPressGame={onPressGame}
      />
      <Modal visible={successModal}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            paddingHorizontal: 15,
            paddingVertical: 50,
            marginHorizontal: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <CircleCheckMark style={{marginBottom: 10}} />
          <Text style={{color: 'black'}}>Order saved successfully</Text>
        </View>
      </Modal>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
