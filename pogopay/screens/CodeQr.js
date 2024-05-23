import React from 'react';
import { View, Button } from 'react-native';

const CodeQr = ({ navigation }) => {
  const navigateToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go" onPress={navigateToDetails} />
    </View>
  );
};

export default CodeQr;
