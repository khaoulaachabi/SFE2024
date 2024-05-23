import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    
    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    const handleSignInPress = () => {
        navigation.navigate('login');
    };

    const isValidEmail = (email) => {
        // Add email validation logic here
        return true;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign up</Text>
            <Text style={styles.subText}>Set a name for your profile, here's the password</Text>
            <Image style={styles.image} source={require('../assets/sign up.png')} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    autoCapitalize="words"
                    onChangeText={text => setName(text)}
                    accessibilityLabel="Enter your name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                    onBlur={() => {
                        if (!isValidEmail(email)) {
                            // Show error message or change style to indicate error
                        }
                    }}
                    accessibilityLabel="Enter your email"
                />
               <View style={styles.passwordInputContainer}>
                    <TextInput
                        style={[styles.input, styles.passwordInput]}
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry={hidePassword}
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={togglePasswordVisibility}
                    >
                        <Icon
                            name={hidePassword ? 'eye-slash' : 'eye'}
                            size={20}
                            color="#000"
                        />
                    </TouchableOpacity>
                    
                </View>
              
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}>Already have an account? <Text style={styles.loginLink} onPress={handleSignInPress}>Log in</Text></Text>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#011A51",
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: '#727E96',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: '60%',
        height: 180,
        marginBottom: 40,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#042552',
        borderRadius: 10,
        paddingLeft: 20,
        marginBottom: 20,
    },
    togglePassword: {
        textAlign: 'right',
        color: '#03D3B9',
    },
    button: {
        width: '100%',
        height: 52,
        backgroundColor: '#03D3B9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomText: {
        fontSize: 16,
        color: '#727E96',
        textAlign: 'center',
    },
    loginLink: {
        color: '#03D3B9',
        textDecorationLine:'underline',
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        paddingRight: 40, 
    },
    icon: {
        position: 'absolute',
        right: 19,
        top: '35%',
        transform: [{ translateY: -10 }],
    },
});

export default Signup;
