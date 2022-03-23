import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image, TouchableOpacity} from 'react-native';

const CountryPage = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  //const setCity = ButtonAction(navigation);

  const [cityVar, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setLoading] = useState(false);
  console.log('called');
  useEffect(() => {
    console.log(cityVar);
    if (!cityVar)
      return;
    async function fetchData()
    {

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
          country: cityVar.text
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
  }, [cityVar]);

  return (
        <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
            <Text style={styles.title}>
          SEARCH BY{'\n'}COUNTRY
            </Text>
        </View>
      <View style={{flex:2}}>
        <TextInput
        style={styles.input}
        placeholder="Enter a country"
        onChangeText={newText => { onChangeText(newText); setErrorMessage(''); }}
                defaultValue={text} />
            
            <TouchableOpacity
        style = {{width: 70, borderRadius: 60, borderWidth: 2, alignSelf: 'center'}}
        onPress={() => setCity({text}) }>
          <Image                 source={require('./search.png')}
            style={{ width: 60, height: 60, alignSelf: 'center',}}/>
        </TouchableOpacity>
      {isLoading ? <Text>Loading...</Text> : <Text style={styles.error}>{errorMessage}</Text>}
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
  }
});

export default CountryPage;