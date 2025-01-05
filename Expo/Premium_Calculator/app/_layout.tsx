import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { Button, View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <GestureHandlerRootView>
      <Stack>
        {/* Index Screen */}
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "UIIC Premium Calculator",
            headerRight: () => (
              <Button
                onPress={toggleModal}
                title="Menu"
                color="#007AFF"
              />
            ),
          }}
        />

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
        <Stack.Screen name="premiumRates" options={{title:'UIIC Premium Calculator'}}  />
      </Stack>

      {/* Modal for the Menu */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Settings</Text>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setModalVisible(false);
                // Navigate to another form
                router.push("premiumRates");
              }}
            >
              <Text style={styles.menuText}>Premium Rates</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={toggleModal}
            >
              <Text style={styles.menuText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  menuItem: {
    padding: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    color: "#007AFF",
  },
});
