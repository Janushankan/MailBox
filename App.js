import { ActivityIndicator, Button } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Inbox from './screens/Inbox';
import { NavigationContainer } from '@react-navigation/native';
import { InboxStack } from './routes/InboxStack';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <InboxStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
