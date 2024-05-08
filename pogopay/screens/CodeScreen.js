import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CodeScreen = () => {
  const navigation = useNavigation();
  
  const handleSignInPress = () => {
    navigation.navigate('Signup');
  };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter Code</Text>
            <Text style={styles.t1}>Enter the 6-digit verification sent to</Text>
            <Text style={styles.t2}>+707429663</Text>
            <Image style={styles.image} source={require('../assets/code.png')} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, {width: '20%'}]} 
                    placeholder=""
                    autoCapitalize="none"
                    keyboardType="number-pad" 
                    placeholderTextColor="#000000"
                />
                <TextInput
                    style={[styles.input, {width: '20%'}]} 
                    placeholder=""
                    autoCapitalize="none"
                    keyboardType="number-pad" 
                    placeholderTextColor="#000000"
                />
                <TextInput
                    style={[styles.input, {width: '20%'}]} 
                    placeholder=""
                    autoCapitalize="none"
                    keyboardType="number-pad" 
                    placeholderTextColor="#000000"
                />
                <TextInput
                    style={[styles.input, {width: '20%'}]} 
                    placeholder=""
                    autoCapitalize="none"
                    keyboardType="number-pad" 
                    placeholderTextColor="#000000"
                />
               
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignInPress} >
                <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    );

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#011A51",
        marginTop: 75,
    },
    image: {
        width: '60%',
        height: 180,
        marginTop: 80,
    },
    t1: {
        fontSize: 11,
        fontWeight: "bold",
        color: '#727E96',
        marginTop: 20,
    },
    t2: {
        fontSize: 11,
        color: '#727E96',
        fontWeight: "bold",
    },
    button: {
        width: '60%',
        height: 52,
        backgroundColor: '#03D3B9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 60,
    },
    buttonText: {
        color: "white",
        fontSize: 19,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 50,
    },
    input: {
        height: height * 0.06,
        borderWidth: 1,
        borderColor: '#042552',
        borderRadius: width * 0.03,
        paddingLeft: width * 0.02,
        marginRight: 10,
        backgroundColor: '#EFF2F4',
    },
});

export default CodeScreen;
