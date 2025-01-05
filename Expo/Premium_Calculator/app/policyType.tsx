import { Text, View } from "react-native";
import {Link, useLocalSearchParams} from "expo-router"
import React from "react";

export default function PolicyType() {
    const params = useLocalSearchParams<{vehicleType: string}>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Select policy type </Text>
        <Link href={`/${params.vehicleType}PackagePolicy`} style={{color:"white", backgroundColor: "#080230", padding: 5, margin: 5, height: 40, width:'80%', textAlign: 'center'}}>Package Policy</Link>
        <Link href={`/${params.vehicleType}LiabilityPolicy`} style={{color:"white", backgroundColor: "#080230", padding: 5, margin: 5, height: 40, width:'80%', textAlign: 'center'}}>Liability Policy</Link>
    </View>
  );
}
