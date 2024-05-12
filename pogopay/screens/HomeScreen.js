import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons from Expo
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [balance, setBalance] = useState('500.00'); // State to store available balance

  // Dummy data for recent transactions
  const recentTransactions = [
    { id: '1', type: 'Purchase', date: 'May 1, 2024', amount: '$25.00' },
    { id: '2', type: 'Deposit', date: 'April 28, 2024', amount: '$50.00' },
    { id: '3', type: 'Withdrawal', date: 'April 25, 2024', amount: '$30.00' },
    // Add more transactions as needed
  ];

  const handleViewAllTransactions = () => {
    navigation.navigate('Transactions'); // Navigate to the AllTransactions screen
  };
  const handleTransferMoney = () => {
    navigation.navigate('Transfer');
  
  };
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/user1.png')} // Placeholder profile image
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>My card Balance</Text>
        <TextInput
          style={styles.balanceInput}
          value={balance}
          onChangeText={(text) => setBalance(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.transactions}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionHeader}>Recent Transactions</Text>
          <TouchableOpacity onPress={handleViewAllTransactions}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={recentTransactions}
          renderItem={({ item }) => (
            <View style={styles.transaction}>
              <FontAwesome name="exchange" size={24} color="#FB847C" style={styles.transactionIcon} />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionType}>{item.type}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity style={styles.transferButton} onPress={ handleTransferMoney}>
        <Text style={styles.transferButtonText}>Transfer Money</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transferButton: {
    backgroundColor: '#03D3B9',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    top:20
  },
  transferButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceCard: {
    backgroundColor: '#EFF2F4',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    height:'25%'
  },
  balanceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#011A51'
  },
  balanceInput: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 36,
    color:'#011A51',
    fontWeight: 'bold',
  },
  transactions: {
    marginBottom: 20,
    top:20

  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#FB847C',
    fontWeight: 'bold',
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    padding: 15,
    marginBottom: 10,
  },
  transactionIcon: {
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
    marginRight: 10,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  transactionDate: {
    fontSize: 14,
    color: '#757575',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#03D3B9',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
