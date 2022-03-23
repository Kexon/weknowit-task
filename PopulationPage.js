import React, { useEffect, useState }  from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

const PopulationPage = ({ navigation, route }) => {
  const data = route.params;
  /*
  const city = route.params.name;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/population/cities', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: city
      
      })
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }, []);
    */
  
    /*
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);
  
    useEffect(() => {
      fetch('http://api.geonames.org/search?country=FR&username=weknowit', {
        method: 'GET',
        headers: {
          //Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  */
  //console.log(dataParam);
  
  return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{data.city}</Text>    
              <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.country}</Text>
              <Text style={styles.normal}>POPULATION</Text>
              <Text style={styles.normal}>{Math.round(data.populationCounts[0].value)}</Text>
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

export default PopulationPage;