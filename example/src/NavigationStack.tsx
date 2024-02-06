import * as React from 'react';
import HomeScreen from './Screens/HomeScreen';
import BlobScreen from './Screens/BlobScreen';
import CollectionScreen from './Screens/CollectionsScreen';
import DatabaseScreen from './Screens/DatabaseScreen';
import DocumentScreen from './Screens/DocumentScreen';
import QueryScreen from './Screens/QueryScreen';
import ReplicationScreen from './Screens/ReplicationScreen';
import LoggingScreen from './Screens/LoggingScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Couchbase Lite' }}
      />
      <Stack.Screen
        name="BlobScreen"
        component={BlobScreen}
        options={{ title: 'Blobs' }}
      />
       <Stack.Screen
        name="LoggingScreen"
        component={LoggingScreen}
        options={{ title: 'Logging Options' }}
      />
      <Stack.Screen
        name="CollectionScreen"
        component={CollectionScreen}
        options={{ title: 'Collections' }}
      />
      <Stack.Screen
        name="DatabaseScreen"
        component={DatabaseScreen}
        options={{ title: 'Databases' }}
      />
      <Stack.Screen
        name="DocumentScreen"
        component={DocumentScreen}
        options={{ title: 'Documents' }}
      />
      <Stack.Screen
        name="QueryScreen"
        component={QueryScreen}
        options={{ title: 'Query' }}
      />
      <Stack.Screen
        name="ReplicationScreen"
        component={ReplicationScreen}
        options={{ title: 'Replication' }}
      />
    </Stack.Navigator>
  );
}
