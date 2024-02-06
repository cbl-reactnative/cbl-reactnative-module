/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';

const ListItem = ({ title }) => (
  <View
    style={{
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10, // Round corners
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
        },
        android: {
          elevation: 5,
        },
      }),
    }}
  >
    <Text style={{ fontSize: 18 }}>{title}</Text>
  </View>
);

const screenOptions = [
  { id: '1', name: 'Logging', screen: 'LoggingScreen' },
  { id: '2', name: 'Database', screen: 'DatabaseScreen' },
  { id: '3', name: 'Collections', screen: 'CollectionScreen' },
  { id: '4', name: 'Documents', screen: 'DocumentScreen' },
  { id: '5', name: 'Blobs', screen: 'BlobScreen' },
  { id: '6', name: 'Query', screen: 'QueryScreen' },
  { id: '7', name: 'Replication', screen: 'ReplicationScreen' },
];

export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={screenOptions}
      contentContainerStyle={{ padding: 10 }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          //style={{ padding: 20 }}
          onPress={() => navigation.navigate(item.screen)}
        >
          <ListItem title={item.name} />
        </TouchableOpacity>
      )}
    />
  );
}
