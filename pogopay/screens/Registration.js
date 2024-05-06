import React, { useState } from 'react';
import { StyleSheet, View, Image, Text,TouchableOpacity ,TextInput,Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Registration =()=>{
    const navigation = useNavigation();
  
  const handleSignInPress = () => {
    navigation.navigate('Code');
  };
    const [phoneNumber, setPhoneNumber] = useState('+212707543213'); 

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Registration</Text>
            <Text style={styles.t1}>Enter your mobile phone number, we will send</Text>
            <Text style={styles.t2}>you OTP to verify later.</Text>
            <Image style={styles.image} source={require('../assets/register.png')} />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                autoCapitalize="none"
                keyboardType="phone-pad"
                placeholderTextColor="#000000"
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
            <Text style={styles.buttonText}>SEND VIA SMS</Text>
           </TouchableOpacity>
           <Text style={styles.t3}>By creating and/or using an account, you </Text>
          <Text style={styles.t4}>agree to our Terms & Conditions.</Text>
        </View>
    );
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flex: 1,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: -12,
        color:"#011A51",
        top:75,
        textAlign:'center',
        
      },
      image: {
        width: '60%',
        height: 180,
        top: 160,
        left:70,
      },
      t1:{
        fontSize: 11,
        top:90,
        left:80,
        fontWeight: "bold",
        color:'#727E96',
      },
      t2:{
        fontSize: 11,
        color:'#727E96',
        top:96,
        left:130,
        fontWeight: "bold",
      },
      t3:{
        fontSize: 11,
        top:380,
        left:90,
        fontWeight: "bold",
      },
      t4:{
        fontSize: 11,
        top:380,
        left:110,
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
        left:82,
      },
      buttonText: {
        color:"white",
        fontSize: 19,
        fontWeight: 'bold',
      },
      input: {
        width: '80%',
        height: height * 0.06,
        borderWidth: 1,
        borderColor: '#042552',
        borderRadius: width * 0.03,
        paddingLeft: width * 0.02,
        backgroundColor:'black',
        marginBottom: height * 0.02,
        top:200,
        left:35,
        backgroundColor:'#EFF2F4'
      },
  });
  
  export default Registration;