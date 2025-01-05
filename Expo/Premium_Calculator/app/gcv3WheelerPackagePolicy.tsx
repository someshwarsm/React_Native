import { Text, TextInput, View, ScrollView, StyleSheet, Button, Pressable, Alert } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import RNDateTimePicker  from '@react-native-community/datetimepicker';
import { Link, router } from "expo-router";
import calculatePremium from "./calculatePremium";
import { GestureStateManager } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gestureStateManager";
import React from "react";



export default function gcv3WheelerPackagePolicy() {
  const policy = "GCV3WheelerPackagePolicy"
  const [typeOfVehicle, setTypeOfVehicle] = useState("")
  const [publicOrPrivateValue, setPublicOrPrivateValue] = useState("")
  const [zone, setZone] = useState("") 
  const [dateOfPurchase, setDateOfPurchase] = useState("")
  const [selectedPurchaseDate, setSelectedPurchaseDate] = useState(new Date())
  const [isDatePickerPurchaseVisible, setDatePickerPurchaseVisibility] = useState(false);
  const [isDatePickerRenewalVisible, setDatePickerRenewalVisibility] = useState(false);
  const [dateOfRenewal, setDateOfRenewal] = useState("")
  const [selectedRenewalDate, setSelectedRenewalDate] = useState(new Date())
  const [idvValue, setIDVValue] = useState("")
  const [odDiscount, setODDiscount] = useState("")
  const [ncbValue, setNCBValue] = useState("")
  const [nilDepreciationValue, setNilDepreciationValue] = useState("")
  const [returnToInvoiceValue, setReturnToInvoiceValue] = useState("")
  const [engineProtectionValue, setEngineProtectionValue] = useState("")
  const [consumablesValue, setConsumablesValue] = useState("")
  const [tyreAndRimProtectionValue, setTyreAndRimProtectionValue] = useState("")
  const [roadSideAssistanceValue, setRoadSideAssistanceValue] = useState("")
  const [keyReplacementValue, setKeyReplacementValue] = useState("")
  const [electricalAccessoriesValue, setElectricalAccessories] = useState("")
  const [nonElectricalAccessoriesValue, setNonElectricalAccessories] = useState("")
  const [builtInBiFuelKitValue, setbuiltInBiFuelKitValue] = useState("")
  const [biFuelKitValue, setBiFuelKitValue] = useState("")
  const [antiTheftValue, setAntiTheftValue] = useState("")
  const [imt23RequiredValue, setIMT23RequiredValue] = useState("")
  const [paToOwnerDriverValue, setPAToOwnerDriverValue] = useState("")
  const [noOfPaidDriversForLLValue, setNoOfPaidDriversForLLValue] = useState("")
  const [noOfPaidDriversForPAValue, setNoOfPaidDriversForPAValue] = useState("")
  const [sumInsuredEachValue, setSumInsuredEachValue] = useState("")
  const [noOfNonFareEmployeesValue, setNoOfNonFareEmployeesValue] = useState("")
  const [noOfNonFareNonEmployeesValue, setNoOfNonFareNonEmployeesValue] = useState("")
  const [tppdValue, setTPPDValue] = useState("")


  const inputData = {
    policy,
    typeOfVehicle,
    publicOrPrivateValue,
    zone,
    dateOfPurchase,
    dateOfRenewal,
    idvValue,
    odDiscount,
    ncbValue,
    nilDepreciationValue,
    returnToInvoiceValue,
    engineProtectionValue,
    consumablesValue,
    tyreAndRimProtectionValue,
    roadSideAssistanceValue,
    keyReplacementValue,
    electricalAccessoriesValue,
    nonElectricalAccessoriesValue,
    builtInBiFuelKitValue,
    biFuelKitValue,
    antiTheftValue,
    imt23RequiredValue,
    paToOwnerDriverValue,
    noOfPaidDriversForLLValue,
    noOfPaidDriversForPAValue,
    sumInsuredEachValue,
    noOfNonFareEmployeesValue,
    noOfNonFareNonEmployeesValue,
    tppdValue,
  };




  const typeOfVehicleData = [{label: 'New', value:'New'}, {label: 'Pre-owned', value:'Pre-Owned'}]
  const publicOrPrivateData = [{label: 'PUBLIC', value:'PUBLIC'}, {label: 'Private', value:'Private'}]
  const zoneData = [{label: 'Zone A', value:'Zone A'}, {label: 'Zone B', value:'Zone B'}, {label: 'Zone C', value:'Zone C'}]
  const ncbData = [{label: '0', value:'0'}, {label: '20', value:'20'}, {label: '25', value:'25'}, {label: '35', value:'35'}, {label: '45', value:'45'}, {label: '50', value:'50'}]
  const engineProtectionData = [{label: 'Platinum', value: 'Platinum'}, {label: 'Standard', value: 'Standard'}, {label: 'No', value: 'No'}]
  const yesOrNoData = [{label: 'Yes', value:'Yes'}, {label: 'No', value:'No'}]
  const noOfPaidDriversData = [{label: '0', value:'0'}, {label: '1', value:'1'}, {label: '2', value:'2'}, {label: '3', value:'3'}, {label: '4', value:'4'}, {label: '5', value:'5'}, {label: '6', value:'6'}]
  const sumInsuredEachData = [{label: '0', value:'0'}, 
    {label: '10000', value:'10000'}, 
    {label: '20000', value:'20000'}, 
    {label: '30000', value:'30000'}, 
    {label: '40000', value:'40000'}, 
    {label: '50000', value:'50000'}, 
    {label: '60000', value:'60000'}, 
    {label: '70000', value:'70000'}, 
    {label: '80000', value:'80000'}, 
    {label: '90000', value:'90000'}, 
    {label: '100000', value:'100000'}, 
    {label: '110000', value:'110000'}, 
    {label: '120000', value:'120000'}, 
    {label: '130000', value:'130000'}, 
    {label: '140000', value:'140000'}, 
    {label: '150000', value:'150000'}, 
    {label: '160000', value:'160000'}, 
    {label: '170000', value:'170000'}, 
    {label: '180000', value:'180000'}, 
    {label: '190000', value:'190000'}, 
    {label: '200000', value:'200000'}]
  const tppdData = [{label: 'RS 7.5 Lakh', value:'RS 7.5 Lakh'}, {label: 'RS 6000', value:'RS 6000'}]




  const showDatePickerForPurchase = () => {
    setDatePickerPurchaseVisibility(true);
  };

  const showDatePickerForRenewal = () => {
    setDatePickerRenewalVisibility(true);
  };

  const handleDateOfPurchase = (event: any, date: Date) =>{
    setSelectedPurchaseDate(date)
    setDateOfPurchase(selectedPurchaseDate.toISOString().substring(0, 10));
    setDatePickerPurchaseVisibility(false)
  };

  const handleDateOfRenewal = (event: any, date: Date) =>{
    setSelectedRenewalDate(date)
    setDateOfRenewal(selectedRenewalDate.toISOString().substring(0, 10))
    setDatePickerRenewalVisibility(false)
  };

  const handleCalculateButton = () => {
    router.push({pathname:`/calculatePremium`, params:inputData})
  }




  return (
    <ScrollView
      style={{
        flex: 1
      }}
    >

      <View>

        <Text style={styles.heading1}>Part A: Own Damage</Text>

        <View style={styles.row}>
          <Text style={styles.text}>Type of Vehicle</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={typeOfVehicleData} 
            placeholder="Select"
            value={typeOfVehicle} 
            onChange={item => {setTypeOfVehicle(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>PUBLIC/PRIVATE</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={publicOrPrivateData} 
            placeholder="Select"
            value={publicOrPrivateValue} 
            onChange={item => {setPublicOrPrivateValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Zone</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={zoneData} 
            placeholder="Select"
            value={zone} 
            onChange={item => {setZone(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Date of Purchase</Text>
          {isDatePickerPurchaseVisible && (<RNDateTimePicker display="spinner" value={selectedPurchaseDate} on onChange={handleDateOfPurchase} positiveButton={{textColor: "white"}} negativeButton={{textColor: "white"}}/>)}
          <TextInput style={styles.textInput} value={dateOfPurchase} onPress={showDatePickerForPurchase}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Renewal Date</Text>
          {isDatePickerRenewalVisible && (<RNDateTimePicker display="spinner" value={selectedRenewalDate} onChange={handleDateOfRenewal} positiveButton={{textColor: "white"}} negativeButton={{textColor: "white"}}/>)}
          <TextInput style={styles.textInput} value={dateOfRenewal} onPress={showDatePickerForRenewal}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Current IDV</Text>
          <TextInput style={styles.textInput} placeholder="Enter the IDV" value={idvValue} onChange={event => setIDVValue(event.nativeEvent.text)} inputMode="numeric"/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>OD Discount (%)</Text>
          <TextInput style={styles.textInput} placeholder="Enter the OD Discount" value={odDiscount} onChange={event => setODDiscount(event.nativeEvent.text)} inputMode="numeric"/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>No Claim Bonus (%)</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={ncbData} 
            placeholder="Select"
            value={ncbValue} 
            onChange={item => {setNCBValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Nil Depreciation</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={nilDepreciationValue} 
            onChange={item => {setNilDepreciationValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Return to Invoice</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={returnToInvoiceValue} 
            onChange={item => {setReturnToInvoiceValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Engine Protection</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={engineProtectionData} 
            placeholder="Select"
            value={engineProtectionValue} 
            onChange={item => {setEngineProtectionValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Consumables</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={consumablesValue} 
            onChange={item => {setConsumablesValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Tyre and Rim Protection</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={tyreAndRimProtectionValue} 
            onChange={item => {setTyreAndRimProtectionValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Road Side Assistance</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={roadSideAssistanceValue} 
            onChange={item => {setRoadSideAssistanceValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Key Replacement</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={keyReplacementValue} 
            onChange={item => {setKeyReplacementValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Electrical Accessories</Text>
          <TextInput style={styles.textInput} placeholder="Enter Electrical Accessories Amount" value={electricalAccessoriesValue} onChange={event => setElectricalAccessories(event.nativeEvent.text)} inputMode="numeric"/>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.text}>Non Electrical Accessories</Text>
          <TextInput style={styles.textInput} placeholder="Enter Non Electrical Accessories Amount" value={nonElectricalAccessoriesValue} onChange={event => setNonElectricalAccessories(event.nativeEvent.text)} inputMode="numeric"/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Built-In Bifuel Kit(CNG/LPG)</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={builtInBiFuelKitValue} 
            onChange={item => {setbuiltInBiFuelKitValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Bifuel CNG/LPG Kit</Text>
          <TextInput style={styles.textInput} placeholder="Enter Bifuel CNG/LPG Kit Amount" value={biFuelKitValue} onChange={event => setBiFuelKitValue(event.nativeEvent.text)} inputMode="numeric"/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Anti-Theft</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={antiTheftValue} 
            onChange={item => {setAntiTheftValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>IMT 23 Required</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={imt23RequiredValue} 
            onChange={item => {setIMT23RequiredValue(item.value);}}/>
        </View>

      </View>
      

      <View>

        <Text style={styles.heading1}>Part B: Liability</Text>

        <View style={styles.row}>
          <Text style={styles.text}>PA Owner-Driver</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={paToOwnerDriverValue} 
            onChange={item => {setPAToOwnerDriverValue(item.value);}}/>
        </View>


        <View>
        
          <Text style={styles.heading2}>Legal Liability to Paid Drivers, Cleaners and Conductors</Text>

          <View style={styles.heading2BlockBackground}>

            <View style={styles.row}>
              <Text style={styles.text}>No. of Paid Drivers</Text>
              <Dropdown 
                labelField="label" 
                valueField="value" 
                style={styles.dropdown} 
                data={noOfPaidDriversData} 
                placeholder="Select"
                value={noOfPaidDriversForLLValue} 
                onChange={item => {setNoOfPaidDriversForLLValue(item.value);}}/>
            </View>
          </View>

        </View>

        <View>

          <Text style={styles.heading2}>PA to Paid Drivers, Cleaners and Conductors</Text>

          <View style={styles.heading2BlockBackground}>

            <View style={styles.row}>
              <Text style={styles.text}>No. of Paid Drivers</Text>
              <Dropdown 
                labelField="label" 
                valueField="value" 
                style={styles.dropdown} 
                data={noOfPaidDriversData} 
                placeholder="Select"
                value={noOfPaidDriversForPAValue} 
                onChange={item => {setNoOfPaidDriversForPAValue(item.value);}}/>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Sum Insured (Each)</Text>
              <Dropdown 
                labelField="label" 
                valueField="value" 
                style={styles.dropdown} 
                data={sumInsuredEachData} 
                placeholder="Select"
                value={sumInsuredEachValue} 
                onChange={item => {setSumInsuredEachValue(item.value);}}/>
            </View>

          </View>

        </View>

        <View>
          <Text style={styles.heading2}>Legal Liability to Non-Fare Paying Passenger</Text>

          <View style={styles.heading2BlockBackground}>

            <View style={styles.row}>
              <Text style={styles.text}>No. of Non-Fare Passenger (Employee)</Text>
              <Dropdown 
                labelField="label" 
                valueField="value" 
                style={styles.dropdown} 
                data={noOfPaidDriversData} 
                placeholder="Select"
                value={noOfNonFareEmployeesValue} 
                onChange={item => {setNoOfNonFareEmployeesValue(item.value);}}/>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>No. of Non-Fare Passenger(Non-Employee)</Text>
              <Dropdown 
                labelField="label" 
                valueField="value" 
                style={styles.dropdown} 
                data={noOfPaidDriversData} 
                placeholder="Select"
                value={noOfNonFareNonEmployeesValue} 
                onChange={item => {setNoOfNonFareNonEmployeesValue(item.value);}}/>
            </View>
          </View>

        </View>


        <View style={styles.row}>
          <Text style={styles.text}>TPPD Cover</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={tppdData} 
            placeholder="Select"
            value={tppdValue} 
            onChange={item => {setTPPDValue(item.value);}}/>
        </View>
      </View>

      <View style={{flex: 1, alignItems: "center"}}>
        <Pressable style={styles.calculateButton} onPress={handleCalculateButton}>
          <Text style={styles.calculateButtonText}>Calculate</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}




const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:"center",
    margin:10
  },

  heading1: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: 8
  },

  heading2: {
    backgroundColor: "#4a5866",
    color: "white",
    textAlign: "center",
    padding: 3
  },

  dropdown: {
    backgroundColor:"silver",
    borderWidth:0.5,
    height:50,
    width:150,
    flex:1
  },

  text: {
    flex:1,
    textAlign:"center"
  },

  textInput:{
    backgroundColor:"silver",
    borderWidth:0.5,
    height:50,
    width:150,
    flex:1
  },

  calculateButton:{
    backgroundColor:"grey",
    borderWidth:0.5,
    borderRadius: 5,
    margin: 50,
    height: 40,
    width: 150
  },

  calculateButtonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    padding: 2
  },

  heading2BlockBackground: {
    backgroundColor: "#c2c6cc", 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10
  }
})
