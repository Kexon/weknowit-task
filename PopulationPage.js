import React, { useEffect, useState }  from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

const PopulationPage = ({ navigation, route }) => {
  const city = route.params.name;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(city);
  console.log(data);

  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/population/cities', {
      method: 'POST',
      headers: {
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
  
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text style={styles.title}>Loading...</Text> : 
            (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={styles.title}>{data.data.city}</Text>    
              <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.data.country}</Text>
              <Text style={styles.normal}>POPULATION</Text>
              <Text style={styles.normal}>{data.data.populationCounts[0].value}</Text>
            
        </View>
      )}
    </View>
        <Text style={styles.title}>
        </Text>
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