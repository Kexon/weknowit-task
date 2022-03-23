import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestPage from './TestPage';
import CityPage from './CityPage';
import PopulationPage from './PopulationPage';
import CountryPage from './CountryPage';
import CitiesPage from './CitiesPage';

const Stack = createNativeStackNavigator();

const CitySearchScene = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2, justifyContent: 'center'}}>
      <Text style={styles.title}>
        CityPop
      </Text>
      </View>
      <View style={{flex:3}}>
      <TouchableOpacity
        style = {styles.button}
        onPress={() => navigation.navigate('City')
        }><Text style={styles.buttonText}>SEARCH BY CITY</Text></TouchableOpacity>
      <TouchableOpacity
        style = {styles.button}
        onPress={() => navigation.navigate('Country')
        }><Text style={styles.buttonText}>SEARCH BY COUNTRY</Text></TouchableOpacity>
      </View>
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
      <Stack.Screen name="Country" component={CountryPage} />
      <Stack.Screen name="Cities" component={CitiesPage} />
      <Stack.Screen name="Population" component={PopulationPage} />
      </Stack.Navigator>
    </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
    
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 0,
  },
  normal: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
    height: 80,
    marginTop :10
  }, buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default App;