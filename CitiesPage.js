import { StyleSheet, View, SafeAreaView, Text, TextInput, Image, TouchableOpacity, FlatList, Button} from 'react-native';
import PopulationPage from './PopulationPage';
export default function CitiesPage({navigation, route}) {
    const jsonData = route.params;
    console.log(jsonData);
    return (
        <FlatList
            data={jsonData.data}
            keyExtractor={(item, city) => city}
            renderItem={({ item }) => (
              <Button
              title={item.city}
              onPress={() => navigation.navigate('Population', item)
              }
            />
            )}
          />
    );
    
}