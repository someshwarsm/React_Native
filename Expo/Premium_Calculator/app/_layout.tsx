import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView >

      <Stack>
        <Stack.Screen name="index" options={{title:'UIIC Premium Calculator'}} />
        <Stack.Screen name="policyType" options={{title:'UIIC Premium Calculator'}} />
        <Stack.Screen name="TwoWheelerPackagePolicy" options={{title:'UIIC Premium Calculator'}} />
        <Stack.Screen name="TwoWheelerLiabilityPolicy" options={{title:'UIIC Premium Calculator'}} />
        <Stack.Screen name="gcv3WheelerLiabilityPolicy" options={{title:'UIIC Premium Calculator'}}/>
        <Stack.Screen name="gcv3WheelerPackagePolicy" options={{title:'UIIC Premium Calculator'}} />
        <Stack.Screen name="gcv4WheelerLiabilityPolicy" options={{title:'UIIC Premium Calculator'}}  />
        <Stack.Screen name="gcv4WheelerPackagePolicy" options={{title:'UIIC Premium Calculator'}}  />
        <Stack.Screen name="pcv3WheelerLiabilityPolicy" />
        <Stack.Screen name="pcv3WheelerPackagePolicy" options={{title:'UIIC Premium Calculator'}}  />
        <Stack.Screen name="pcv4WheelerExceeding6PassangersLiabilityPolicy" options={{title:'UIIC Premium Calculator'}}  />
        <Stack.Screen name="pcv4WheelerExceeding6PassangersPackagePolicy" options={{title:'UIIC Premium Calculator'}}  />
        <Stack.Screen name="pcv4WheelerUpto6PassangersLiabilityPolicy" options={{title:'UIIC Premium Calculator'}}  />
        <Stack.Screen name="pcv4WheelerUpto6PassangersPackagePolicy" options={{title:'UIIC Premium Calculator'}}  />
        <Stack.Screen name="privateCarLiabilityPolicy" options={{title:'UIIC Premium Calculator'}}  />
        <Stack.Screen name="privateCarPackagePolicy" options={{title:'UIIC Premium Calculator'}}  />
      </Stack>
    </GestureHandlerRootView>
  );
}
