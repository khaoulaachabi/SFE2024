import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button,Image } from 'react-native';

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

      <Text style={styles.label}>Username:</Text>
      <Text style={styles.text}>{username}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{email}</Text>

      <Text style={styles.label}>Bio:</Text>
      <Text style={styles.text}>{bio}</Text>

      <Button title="Edit Profile" onPress={() => {/* Navigate to edit profile screen */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
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
