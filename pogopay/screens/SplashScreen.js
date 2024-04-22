import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const SplashScreen = () => {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       NavigationService.navigate('Welcome'); 
    //     }, 4000)
    //     return () => clearTimeout(timer); 
    // }, []);
  

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/pogo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1721',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width : '49%',
    height :'5%',
    // marginTop: 10,
    // marginLeft:-65
  }
});

export default SplashScreen;
