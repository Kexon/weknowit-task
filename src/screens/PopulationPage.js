import React, { useEffect, useState }  from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import NumberFormat from 'react-number-format';
/**
 * This screen displays the population given in the parameters.
 * react-number-format is used to show a correct format of the population
 */
const PopulationPage = ({ navigation, route }) => {
  const data = route.params;

  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1}}>
        <Text style={styles.title}>{data.city}</Text>
      </View>  
      <View style={{ flex: 4 }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 15, alignSelf: 'center' }}>POPULATION</Text>
          <NumberFormat
              thousandsGroupStyle="thousand"
              value={Math.round(data.populationCounts[0].value)}
              prefix=""
              thousandSeparator=" "
              displayType="text"
              type="text"
            allowNegative={true}
            renderText={formattedValue => <Text style={styles.normal}>{formattedValue}</Text>}
          />
        </View>
              </View>
    </View>

    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 2,
    height: 150,
    marginHorizontal: 5
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 100,
  },
  normal: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 30
  }
});

export default PopulationPage;