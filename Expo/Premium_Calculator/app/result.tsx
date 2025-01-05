import { Text, View, StyleSheet } from "react-native";
import {useLocalSearchParams} from "expo-router"
import { ScrollView } from "react-native-gesture-handler";
import React from "react";

export default function Result() {
  const resultData = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Two wheeler Premium (Bundle Policy)</Text>
      <ScrollView>
        <Text>Vehicle Basic Details</Text>

        {
          Object.entries(resultData).map(([key, value]) => (
            <View style={styles.row} key={key}>
              <Text>{key}</Text>
              <Text>{value}</Text>
            </View>
          ))
        }

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    flex: 1,
    justifyContent:"space-evenly",
    alignItems:"center",
    margin:10
  },

  paramText: {
    flex:1,
    alignItems: "center"
  },

  valueText: {
    flex:1,
    alignItems: "center"
  }
})
