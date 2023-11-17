import {HomeScreenNavigationProp} from '@app/navigations/types';
import React, {useState} from 'react';
import {View, Button} from 'react-native';

type NavigationScreenProps = {
  navigation: HomeScreenNavigationProp;
};
const TestScreen: React.FC<NavigationScreenProps> = ({navigation}) => {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  // const handleButtonPress = () => {
  //   navigation.navigate('Details', {
  //     onNameSelect: (name: string) => {
  //       setSelectedName(name);
  //       navigation.goBack();
  //     },
  //   });
  // };

  return (
    <View>
      <Button title="Select Name" onPress={() => {}} />
      {selectedName && <Button title={selectedName} disabled />}
    </View>
  );
};

export default TestScreen;
