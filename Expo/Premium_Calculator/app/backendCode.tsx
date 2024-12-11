import { Alert } from "react-native";

export default function calculatePremium(inputData) {

    Alert.alert(inputData.idvValue)
    Alert.alert(JSON.stringify(inputData.dateOfPurchase))
    return inputData;

}
