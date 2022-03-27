import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import  {SEARCH}  from '../assets/images';


const CountryPage = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (country.text == '') {
      setErrorMessage('Please enter a country');
      console.log('No input!');
      return;
    }else if(country){
      console.log('fetching data...');
      async function fetchData() {
        setLoading(true);
        let response = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities/filter', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            limit: 11,
            order: 'dsc',
            country: country.text
          })
        }).finally(() => setLoading(false));
        let json = await response.json();
        if (response.ok)
          navigation.navigate('Cities', json);
        else
          setErrorMessage('Could not find country');
        return json.data;
      }
      fetchData();
    }
  }, [country]);

  return (
        <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
            <Text style={styles.title}>
          SEARCH BY{'\n'}COUNTRY
            </Text>
        </View>
      <View style={{flex:2}}>
        {isLoading ? <Text style={{alignSelf:'center'}}>Loading...</Text> : <Text style={styles.error}>{errorMessage}</Text>}
        <TextInput
        style={styles.input}
        placeholder="Enter a country"
          onChangeText={newText => { onChangeText(newText); setErrorMessage('');}}
                defaultValue={text} />
            
            <TouchableOpacity
        style = {styles.button}
          onPress={() => setCountry({text})}>
          <Image                 source={SEARCH}
            style={{ width: 60, height: 60, alignSelf: 'center',}}/>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
    
}


const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
textAlign: 'center',
fontSize: 20
}, 
container: {
  flex: 1,
  justifyContent: 'center',
    marginHorizontal: 16,
},
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 80,
  },
  normal: {
    textAlign: 'center',
    marginVertical: 8,
  }, error: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 8,
    color: 'red'
  }, button: {
    width: 70,
    borderRadius: 60,
    borderWidth: 2,
    alignSelf: 'center'
  }
});

export default CountryPage;