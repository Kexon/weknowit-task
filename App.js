import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestPage from './TestPage';
import CityPage from './CityPage';

const Stack = createNativeStackNavigator();

const Separator = () => (
  <View style={styles.separator} />
);

const CitySearchScene = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        City Pop
      </Text>
      <Button
        title="SEARCH BY CITY"
        onPress={() => navigation.navigate('City')
        }
      />
    </View>
  );
}

const App = () => (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CitySearchScene}
          options={{ headerShown:false}}
      />
      <Stack.Screen name="Test" component={TestPage} />
      <Stack.Screen name="City" component={CityPage} />
      </Stack.Navigator>
    </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 8,
  },
  normal: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;