import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const CityPage = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const setCity = ButtonAction(navigation);
  return (
        <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
            SEARCH BY CITY
            </Text>
        </View>
            
        <TextInput
        style={styles.input}
        placeholder="Enter a city"
        onChangeText={newText => onChangeText(newText)}
                defaultValue={text} />
            
            <TouchableOpacity
            onPress={() => setCity({text}) }>
                <Image                 source={require('./search.png')}
                style={{ width: 60, height: 60, justifyContent: 'center' }}/>
                </TouchableOpacity>

        <Text style={styles.title}>
            {text}
      </Text>
        </SafeAreaView>
    );
    
}
  
function ButtonAction(navigation) {
  const [cityVar, setCity] = useState('');
  console.log(cityVar);
  useEffect(() => {
    if (!cityVar)
      return;
    async function fetchData()
    {
      let response = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          city: cityVar.text
        
        })
      });
      let json = await response.json();
      navigation.navigate('Population', json);
      return json.data;
    }
    fetchData();
  }, [cityVar]);
  return setCity;
        /*
  const [cityParam, setCity] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(cityParam);
  console.log(data);
    
  useEffect(() => {
    console.log('trying to fetch...');
    if (!cityParam)
      return;
    console.log('fetching');
    fetch('https://countriesnow.space/api/v0.1/countries/population/cities', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: cityParam.text
      
      })
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [cityParam]);

  useEffect(() => {
    if (isLoading == false)
      navigation.navigate('Population', data);
  }, [isLoading]);
  return setCity;
  */
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
  },
});

export default CityPage;