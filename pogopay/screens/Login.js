import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const navigation = useNavigation();
  
    const handleSignInPress = () => {
      navigation.navigate('Signup');
    };
    const handleForgotInPress = () => {
        navigation.navigate('Forgot');
      };
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login In</Text>
            <Text style={styles.t1}>Set a name for your profile, here's</Text>
            <Text style={styles.t2}>the password</Text>
            <Image style={styles.image} source={require('../assets/login.jpg')} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    autoCapitalize="words"
                    onChangeText={text => setName(text)}
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
                <TouchableOpacity onPress={handleForgotInPress}  >
                <Text style={styles.t5}>Forgot password?</Text>
            </TouchableOpacity>                
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.t3}>Don’t have an account?</Text>
            <TouchableOpacity onPress={handleSignInPress}  >
                <Text style={styles.t4}>Sign up</Text>
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
        backgroundColor: '#FB847C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 19,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginTop: 50,
    },
    input: {
        width: width * 0.76,
        height: height * 0.06,
        borderWidth: 1,
        borderColor: '#042552',
        borderRadius: width * 0.03,
        paddingLeft: width * 0.02,
        marginBottom: height * 0.05,
        backgroundColor: '#EFF2F4',
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        paddingRight: 40, // Adjust paddingRight to leave space for the icon
    },
    icon: {
        position: 'absolute',
        right: 19,
        top: '30%',
        transform: [{ translateY: -10 }],
    },
    t3: {
        fontSize: 11,
        color: '#727E96',
        fontWeight: "bold",
    },
    t4: {
        fontSize: 11,
        color: '#FB847C',
        fontWeight: "bold",
        textDecorationLine:'underline',
        
    },
    t5: {
        fontSize: 10,
        color: '#FB847C',
        fontWeight: "bold",
        textDecorationLine:'underline',
        top:-37,
        left:210
    },
});

export default Login;
