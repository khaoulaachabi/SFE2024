import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";

const Registration = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('+212707543213');

    const handleSignInPress = () => {
        navigation.navigate('Code');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Registration</Text>
            <Text style={styles.t1}>Enter your mobile phone number, we will send</Text>
            <Text style={styles.t2}>you OTP to verify later.</Text>
            <Image style={styles.image} source={require('../assets/register.png')} />
            <PhoneInput
                defaultCode='MA'
                placeholder='Enter your mobile number'
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
                autoFocus
            />
            <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
                <Text style={styles.buttonText}>SEND VIA SMS</Text>
            </TouchableOpacity>
            <Text style={styles.t3}>By creating and/or using an account, you </Text>
            <Text style={styles.t4}>agree to our Terms & Conditions.</Text>
        </View>
    );
}

const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: -12,
        color: "#011A51",
        top: 75,
        textAlign: 'center',
    },
    image: {
        width: '60%',
        height: 180,
        top: 160,
        left: 70,
    },
    t1: {
        fontSize: 11,
        top: 90,
        left: 80,
        fontWeight: "bold",
        color: '#727E96',
    },
    t2: {
        fontSize: 11,
        color: '#727E96',
        top: 96,
        left: 130,
        fontWeight: "bold",
    },
    t3: {
        fontSize: 11,
        top: 380,
        left: 90,
        fontWeight: "bold",
    },
    t4: {
        fontSize: 11,
        top: 380,
        left: 110,
        fontWeight: "bold",
    },
    button: {
        width: '60%',
        height: 52,
        backgroundColor: '#03D3B9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        top: 268,
        left: 82,
    },
    buttonText: {
        color: "white",
        fontSize: 19,
        fontWeight: 'bold',
        flex:'center',
        
    },
});

export default Registration;
