import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {HomeScreenNavigationProp} from '../../navigations/types';
import styles from './styles';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import useHomeHook from './useHomeHook';
import TableComponent from '@app/components/TableComponent';
import AlertBox from '@app/components/AlertComponent';
import {Modal} from 'react-native-paper';
import CircleCheckMark from '@app/assets/icons/Frame.svg';
import HeaderComponent from '@app/components/HeaderComponent';
import SkeltonLoading from '@app/components/SkeltonLoading';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const TableHeaders = ['LSK', 'Number', 'Count', '₹₹ - D', '₹₹ - C', '#'];

  const {
    theme,
    selectedButton,
    handleButtonPress,
    handleButtonPressABC,
    setTicketCount,
    setTicketNumber,
    listData,
    removeTicket,
    onSaveButton,
    turnOnConfirmModal,
    saveAlert,
    successModal,
    game,
    loading,
    selectedCustomer,
    totalCount,
    totalAmountC,
    totalAmountD,
  } = useHomeHook();

  return (
    <SafeAreaWrapper
      containerStyle={styles.container}
      statusbar={theme.primary}>
      {game && <HeaderComponent />}

      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.body}>
          {/* Customer Name */}

          {loading ? (
            <View style={{marginTop: 20, marginBottom: 5}}>
              <SkeltonLoading height={40} />
            </View>
          ) : (
            <View style={styles.inputContainer}>
              <Pressable
                style={styles.input}
                onPress={() => navigation.navigate('CustomerSelection')}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {selectedCustomer !== null ? (
                    <>
                      <Text style={{paddingVertical: 14}}>
                        {selectedCustomer.username}
                      </Text>
                      <Text style={{paddingVertical: 14}}>Change Customer</Text>
                    </>
                  ) : (
                    <Text style={{paddingVertical: 14}}>Choose A Customer</Text>
                  )}
                </View>
              </Pressable>
            </View>
          )}

          {/* 1, 2, 3 buttons */}

          {loading ? (
            <View style={{marginVertical: 5}}>
              <SkeltonLoading height={40} />
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      selectedButton === 1 ? theme.secondary : theme.primary,
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
                      selectedButton === 2 ? theme.secondary : theme.primary,
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
                      selectedButton === 3 ? theme.secondary : theme.primary,
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
          )}

          {/* Number, Count, B Count textInputs */}

          {loading ? (
            <View style={{marginVertical: 5}}>
              <SkeltonLoading height={40} />
            </View>
          ) : (
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
          )}

          {/* A, B, C, All buttons */}

          {loading ? (
            <View style={{marginVertical: 5}}>
              <SkeltonLoading height={40} />
            </View>
          ) : (
            selectedButton === 1 && (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[
                    styles.buttonABC,
                    {
                      backgroundColor: theme.secondary,
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
                      backgroundColor: theme.secondary,
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
                      backgroundColor: theme.secondary,
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
                      backgroundColor: theme.secondary,
                    },
                  ]}
                  onPress={() => handleButtonPressABC({number: 4, lsk: 'All'})}>
                  <Text style={[styles.buttonText, styles.selectedButtonText]}>
                    All
                  </Text>
                </TouchableOpacity>
              </View>
            )
          )}
          {selectedButton === 2 && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonABC,
                  {
                    backgroundColor: theme.secondary,
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
                    backgroundColor: theme.secondary,
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
                    backgroundColor: theme.secondary,
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
                    backgroundColor: theme.secondary,
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
                    backgroundColor: theme.secondary,
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
                    backgroundColor: theme.secondary,
                  },
                ]}
                onPress={() => handleButtonPressABC({number: 1, lsk: 'BOX'})}>
                <Text style={[styles.buttonText, styles.selectedButtonText]}>
                  BOX
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {loading ? (
            <View style={{marginVertical: 5}}>
              <SkeltonLoading height={40} />
            </View>
          ) : (
            <TableComponent
              tableData={listData}
              tableHeaders={TableHeaders}
              onPressDelete={() => removeTicket(listData)}
            />
          )}
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
              editable={false}
              value={totalCount !== 0 ? totalCount.toString() : ''}
            />
          </View>
          <View style={styles.bottomContainer}>
            <TextInput
              style={styles.inputBottom}
              placeholder="D Amount"
              placeholderTextColor="#888"
              value={totalAmountD !== 0 ? totalAmountD.toString() : ''}
              editable={false}
            />
          </View>
          <View style={styles.bottomContainer}>
            <TextInput
              style={styles.inputBottom}
              placeholder="C Amount"
              placeholderTextColor="#888"
              value={totalAmountC !== 0 ? totalAmountC.toString() : ''}
              editable={false}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.buttonBottom,
              {
                backgroundColor: theme.secondary,
              },
            ]}
            onPress={() => turnOnConfirmModal(true)}>
            <Text style={[styles.bottomButtonText]}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>

      <AlertBox
        isShowAlert={saveAlert}
        title={'Are You Sure ?'}
        confirmText={'Ok'}
        CancelText={'Cancel'}
        CancelPressed={() => turnOnConfirmModal(false)}
        confirmPressed={() => {
          onSaveButton();
        }}
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
