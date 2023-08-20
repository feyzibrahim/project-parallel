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
import GameListBottomUp from '../GameListBottomUp/GameListBottomUp';
import SafeAreaWrapper from '@app/components/Layout/SafeAreaWrapper';
import HeaderComponent from '@app/components/HeaderComponent';
import {COLORS} from '@app/constants/themes';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [isGameListVisible, setGameListVisible] = useState(false);

  const openGameList = () => {
    setGameListVisible(true);
  };

  const closeGameList = () => {
    setGameListVisible(false);
  };
  const [selectedButton, setSelectedButton] = useState<number | null>(1);
  const [selectedButtonABC, setSelectedButtonABC] = useState<number | null>(1);

  const handleButtonPress = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };
  const handleButtonPressABC = (buttonNumber: number) => {
    setSelectedButtonABC(buttonNumber);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Dear 1:00 PM',
      headerRight: () => (
        <TouchableOpacity style={styles.logoutButton} onPress={openGameList}>
          <Text style={styles.logoutButtonText}>Change</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaWrapper
      containerStyle={styles.container}
      statusbar={COLORS.darkBlueShade}>
      <HeaderComponent openGameList={openGameList} />
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
                selectedButton === 1 && styles.selectedButton,
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
                selectedButton === 2 && styles.selectedButton,
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
                selectedButton === 3 && styles.selectedButton,
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
                selectedButtonABC === 1 && styles.selectedButton,
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
                selectedButtonABC === 2 && styles.selectedButton,
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
                selectedButtonABC === 3 && styles.selectedButton,
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
                selectedButtonABC === 4 && styles.selectedButton,
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
