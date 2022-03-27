import { StyleSheet, View, SafeAreaView, Text, TextInput, Image, FlatList, Button, TouchableOpacity, ScrollView} from 'react-native';
/**
 * This screen component lists cities given by parameter
 */
export default function CitiesPage({ navigation, route }) {
    const jsonData = route.params;
    console.log(jsonData);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 11 }}>
      <Text style={styles.title}>{jsonData.data[0].country}</Text>
        <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            data={jsonData.data}
            keyExtractor={(item, city) => city}
          renderItem={({ item }) => (
              <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('Population', item)
              }
              >
                <Text style={styles.buttonText}>{item.city}</Text>
              </TouchableOpacity>
            )}
          />
      </ScrollView>
      </View>
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
    fontSize: 40,
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
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
    height: 80,
    marginTop: 5
  }, buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});