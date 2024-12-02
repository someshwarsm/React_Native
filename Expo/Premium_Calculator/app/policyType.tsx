import { Text, View } from "react-native";
import {Link, useLocalSearchParams} from "expo-router"

export default function PolicyType() {
    const params = useLocalSearchParams<{vehicleType: string}>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Select policy type </Text>
        <Link href={`/${params.vehicleType}PackagePolicy`} style={{color:"white", backgroundColor: "#080230", padding: 5, margin: 5}}>Package Policy</Link>
        <Link href={`/${params.vehicleType}LiabilityPolicy`} style={{color:"white", backgroundColor: "#080230", padding: 5, margin: 5}}>Liability Policy</Link>
    </View>
  );
}
