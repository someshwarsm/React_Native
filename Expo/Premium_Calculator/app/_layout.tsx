import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:'UIIC Premium Calculator'}} />
      <Stack.Screen name="policyType" options={{title:'UIIC Premium Calculator'}} />
      <Stack.Screen name="2WheelerPackagePolicy" options={{title:'UIIC Premium Calculator'}} />
      <Stack.Screen name="2WheelerLiabilityPolicy" options={{title:'UIIC Premium Calculator'}} />
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
  );
}
