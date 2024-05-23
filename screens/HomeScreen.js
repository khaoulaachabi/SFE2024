import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../assets/pogo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Button Container */}
            <View style={styles.buttonContainer}>

                {/* QR Code Button */}
                <TouchableOpacity
                    style={[styles.button, styles.primaryButton]}
                    onPress={() => {
                        navigation.navigate('CODE QR'); // Navigate to QRScreen
                    }}
                >
                    <Text style={styles.buttonText}>QR Code</Text>
                </TouchableOpacity>
              
                {/* Scan QR Code Button */}
                <TouchableOpacity
                    style={[styles.button, styles.secondaryButton]}
                    onPress={() => {
                        // Handle button press for scanning QR code
                    }}
                >
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: -10,
        marginTop: -70, 
    },
    buttonContainer: {
        width: '80%', 
        marginTop: 30, 
    },
    button: {
        paddingVertical: 15, 
        borderRadius: 10, 
        marginBottom: 15, 
    },
    primaryButton: {
        backgroundColor: '#03D3B9', 
    },
    secondaryButton: {
        backgroundColor: '#011A51', 
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold', 
        textAlign: 'center', 
        color: 'white', 
    },
});

export default HomeScreen;
