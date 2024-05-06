import React from 'react';
import { View, Button } from 'react-native';

const History = ({ navigation }) => {
  const navigateToDetails = () => {
    // Navigate to the Details screen
    navigation.navigate('Details');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go" onPress={navigateToDetails} />
    </View>
  );
};

export default History;
