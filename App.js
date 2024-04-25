import { ActivityIndicator, Button, IconComponentProvider } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Inbox from './screens/Inbox';
import { NavigationContainer } from '@react-navigation/native';
import { InboxStack } from './routes/InboxStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DraftsStack } from './routes/DraftsStack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="Inbox" component={InboxStack} />
          <Drawer.Screen name="Drafts" component={DraftsStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </IconComponentProvider>
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
