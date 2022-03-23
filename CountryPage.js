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
        <View>
            <Text style={styles.title}>
            SEARCH BY COUNTRY
            </Text>
        </View>
            
        <TextInput
        style={styles.input}
        placeholder="Enter a country"
        onChangeText={newText => { onChangeText(newText); setErrorMessage(''); }}
                defaultValue={text} />
            
            <TouchableOpacity
            onPress={() => setCity({text}) }>
                <Image                 source={require('./search.png')}
                style={{ width: 60, height: 60, justifyContent: 'center' }}/>
      </TouchableOpacity>
      {isLoading ? <Text>Loading...</Text> : <Text style={styles.error}>{errorMessage}</Text>}
        </SafeAreaView>
    );
    
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    }, 
  container: {
    flex: 1,
    justifyContent: 'center',
      marginHorizontal: 16,
    alignItems: 'center'
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
  },  error: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 8,
    color: 'red'
  }
});

export default CountryPage;