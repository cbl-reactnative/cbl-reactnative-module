/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { NativeModules } from 'react-native';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CBLLogLevel = NativeModules.CBLLogLevel
  ? NativeModules.CBLLogLevel
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const CBLLogDomain = NativeModules.CBLLogDomain
  ? NativeModules.CBLLogDomain
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const LINKING_ERROR =
  `The package 'cb-lite-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

export default function LoggingScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column', // Children are stacked vertically
      justifyContent: 'space-between', // Equal spacing between items
      alignItems: 'center', // Center items horizontally (optional)
      padding: 20, // Add padding around the edges (optional)
    },
    labelContainer: {
      textAlign: 'center',
      paddingTop: 20,
    },
    buttonContainer: {
      paddingTop: 50,
      paddingBottom: 40,
    },
  });

  var emptyArray: string[] = [''];

  const [logLevels, setLogLevels] = useState(emptyArray);
  const [domains, setDomains] = useState(emptyArray);
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  useEffect(() => {
    CBLLogLevel.getLogLevels((error: Error, results: string[]) => {
      if (error) {
        console.log(error);
      } else {
        setLogLevels(results);
      }
    });

    CBLLogDomain.getDomains((error: Error, results: string[]) => {
      if (error) {
        console.log(error);
      } else {
        setDomains(results);
      }
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.labelContainer}>Selected Level: {selectedLevel}</Text>
          <Picker
            selectedValue={selectedLevel}
            style={{ height: 30, width: 400 }}
            onValueChange={(itemValue: string) => setSelectedLevel(itemValue)}
          >
            {logLevels &&
              logLevels.map((item: string, index: number) => (
                <Picker.Item label={item} value={item} key={index} />
              ))}
          </Picker>
        </View>
        <View>
        <Text style={styles.labelContainer}>Selected Domain: {selectedDomain} </Text>
          <Picker
            selectedValue={selectedDomain}
            style={{ height: 30, width: 400 }}
            onValueChange={(itemValue: string) => setSelectedDomain(itemValue)}
          >
            {domains &&
              domains.map((item: string, index: number) => (
                <Picker.Item label={item} value={item} key={index} />
              ))}
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Update Logging" />
        </View>
      </View>
    </>
  );
}
