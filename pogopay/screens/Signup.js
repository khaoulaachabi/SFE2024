import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Signup = () => {
    const navigation = useNavigation();
  
  const handleSignInPress = () => {
    navigation.navigate('login');
  };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign up</Text>
            <Text style={styles.t1}>Set a name for your profile, here's </Text>
            <Text style={styles.t2}>the password</Text>
            <Image style={styles.image} source={require('../assets/sign up.png')} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input} // Adjust width here
                    placeholder="Name"
                    autoCapitalize="words"
                    onChangeText={text => setName(text)}
                />
                <TextInput
                   style={styles.input} // Adjust width here
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input} // Adjust width here
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.t3}>Already have an account?</Text>
            <TouchableOpacity onPress={handleSignInPress}  >
                <Text style={styles.t4}>Log in</Text>
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
    t3: {
        fontSize: 11,
        color: '#727E96',
        fontWeight: "bold",
    },
    t4: {
        fontSize: 11,
        color: '#FB847C',
        fontWeight: "bold",
        textDecorationLine:'underline'
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
});

export default Signup;
