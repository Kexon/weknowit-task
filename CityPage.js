import React, { useState }  from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const CityPage = ({ navigation }) => {
    const [text, onChangeText] = useState('');
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
                onPress={() => navigation.navigate('Population', { name: text})}>
                <Image                 source={require('./search.png')}
                style={{ width: 60, height: 60, justifyContent: 'center' }}/>
                </TouchableOpacity>

        <Text style={styles.title}>
            {text}
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