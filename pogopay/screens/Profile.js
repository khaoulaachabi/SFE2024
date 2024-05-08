import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button,Image ,Dimensions} from 'react-native';

const Profile = () => {
  // Example state variables for profile data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  // Example useEffect to fetch profile data
  useEffect(() => {
    // Simulated fetch profile data
    const fetchProfileData = async () => {
      // Example fetch profile data from AsyncStorage or API
      // For demonstration purpose, I'm using static data
      const profileData = {
        username: 'JohnDoe',
        email: 'john@example.com',
        bio: 'A software developer passionate about React Native.'
      };

      // Update state with profile data
      setUsername(profileData.username);
      setEmail(profileData.email);
      setBio(profileData.bio);
    };

    // Call fetchProfileData function
    fetchProfileData();
  }, []);

  return (
    <View style={styles.container}>
        

    <Image style={styles.image} source={require('../assets/woman.png')} />
    <Text>Khaoula</Text>

    <View style={styles.info}>
                  <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingTop:17, borderBottomRightRadius: width *0.1 ,borderBottomLeftRadius: width *0.1 }} > 
                  <Text style={styles.label}>Username:</Text>
                 <Text style={styles.text}>{username}</Text>

                  </View>
        </View>
        <View style={styles.info}>
              <Text style={styles.personal}>Personal information</Text>
              <View style={styles.horizontalLine} />
                  <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingTop:17, borderBottomRightRadius: width *0.1 ,borderBottomLeftRadius: width *0.1 }} > 
                  <Text style={styles.label}>Username:</Text>
                 <Text style={styles.text}>{username}</Text>

                    <Text style={styles.label}>Email:</Text>
                  <Text style={styles.text}>{email}</Text>

                 <Text style={styles.label}>Bio:</Text>
                  <Text style={styles.text}>{bio}</Text>
                  </View>
        </View>
        <View style={styles.info}>
              <Text style={styles.personal}>Personal information</Text>
              <View style={styles.horizontalLine} />
                  <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingTop:17, borderBottomRightRadius: width *0.1 ,borderBottomLeftRadius: width *0.1 }} > 
                  <Text style={styles.label}>Username:</Text>
                 <Text style={styles.text}>{username}</Text>

                    <Text style={styles.label}>Email:</Text>
                  <Text style={styles.text}>{email}</Text>

                 <Text style={styles.label}>Bio:</Text>
                  <Text style={styles.text}>{bio}</Text>
                  </View>
        </View>
        <View style={styles.info}>
              <Text style={styles.personal}>Personal information</Text>
              <View style={styles.horizontalLine} />
                  <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingTop:17, borderBottomRightRadius: width *0.1 ,borderBottomLeftRadius: width *0.1 }} > 
                  <Text style={styles.label}>Username:</Text>
                 <Text style={styles.text}>{username}</Text>

                    <Text style={styles.label}>Email:</Text>
                  <Text style={styles.text}>{email}</Text>

                 <Text style={styles.label}>Bio:</Text>
                  <Text style={styles.text}>{bio}</Text>
                  </View>
        </View>
        <View style={styles.info}>
              <Text style={styles.personal}>Personal information</Text>
              <View style={styles.horizontalLine} />
                  <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingTop:17, borderBottomRightRadius: width *0.1 ,borderBottomLeftRadius: width *0.1 }} > 
                  <Text style={styles.label}>Username:</Text>
                 <Text style={styles.text}>{username}</Text>

                    <Text style={styles.label}>Email:</Text>
                  <Text style={styles.text}>{email}</Text>

                 <Text style={styles.label}>Bio:</Text>
                  <Text style={styles.text}>{bio}</Text>
                  </View>
        </View>
        <View style={styles.info}>
              <Text style={styles.personal}>Personal information</Text>
              <View style={styles.horizontalLine} />
                  <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingTop:17, borderBottomRightRadius: width *0.1 ,borderBottomLeftRadius: width *0.1 }} > 
                  <Text style={styles.label}>Username:</Text>
                 <Text style={styles.text}>{username}</Text>

                    <Text style={styles.label}>Email:</Text>
                  <Text style={styles.text}>{email}</Text>

                 <Text style={styles.label}>Bio:</Text>
                  <Text style={styles.text}>{bio}</Text>
                  </View>
        </View>
    <View>
    
    </View>

      

    </View>
  );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: width * 0.05, 
      },
      horizontalLine: {
        borderBottomWidth: 1, 
        borderBottomColor: 'white', 
        width: '80%', 
        marginLeft:35,
        marginTop:10
      },
      info: {
        backgroundColor: 'rgba(4, 37, 82, 0.2)',
        borderRadius: width * 0.1,
        width: '100%',
        height: '10%',
        // backgroundColor:"red",
        // textAlign:"center"
        // marginTop: height * 0.05, 
      },
      personal: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: width * 0.04, 
        marginTop: height * 0.02, 
        color:"#042552",
    
      },
  image: {
    width: '20%',
    height:'10%'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    fontSize: 16,
    marginBottom: 15
  }
});

export default Profile;
