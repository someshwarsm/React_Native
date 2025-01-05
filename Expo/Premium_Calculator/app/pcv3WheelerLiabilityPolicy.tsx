import { Text, View, ScrollView, StyleSheet, Button, Pressable } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { router } from "expo-router";
import calculatePremium from "./calculatePremium";
import React from "react";



export default function pcv3WheelerLiabilityPolicy() {
  const policy = "PCV3WheelerLiabilityPolicy"
  const [seatingCapacityValue, setSeatingCapacityValue] = useState("")
  const [bifuelKitValue, setBifuelKitValue] = useState("")
  const [paToOwnerDriverValue, setPAToOwnerDriverValue] = useState("")
  const [llToPaidDriverValue, setLLToPaidDriverValue] = useState("")
  const [llToEmployeesValue, setLLToEmployeesValue] = useState("")
  const [noOfPassengers, setNoOfPassengers] = useState("")
  const [sumInsuredEachValue, setSumInsuredEachValue] = useState("")
  const [tppdValue, setTPPDValue] = useState("")


  const inputData = {
    policy,
    seatingCapacityValue,
    bifuelKitValue,
    paToOwnerDriverValue,
    llToPaidDriverValue,
    llToEmployeesValue,
    noOfPassengers,
    sumInsuredEachValue,
    tppdValue,
  };



  const seatingCapacityData = [{label: '1', value:'1'}, {label: '2', value:'2'}, {label: '3', value:'3'}, {label: '4', value:'4'}, {label: '5', value:'5'}, {label: '6', value:'6'}]
  const yesOrNoData = [{label: 'Yes', value:'Yes'}, {label: 'No', value:'No'}]
  const noOfPassengersData = [{label: '0', value:'0'}, {label: '1', value:'1'}, {label: '2', value:'2'}, {label: '3', value:'3'}, {label: '4', value:'4'}, {label: '5', value:'5'}, {label: '6', value:'6'}]
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

        <Text style={styles.heading1}>Liability Only</Text>

        <View style={styles.row}>
          <Text style={styles.text}>Seating Capacity</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={seatingCapacityData} 
            placeholder="Select"
            value={seatingCapacityValue} 
            onChange={item => {setSeatingCapacityValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Bifuel Kit</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={bifuelKitValue} 
            onChange={item => {setBifuelKitValue(item.value);}}/>
        </View>

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

        <View style={styles.row}>
          <Text style={styles.text}>LL to Paid driver</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={llToPaidDriverValue} 
            onChange={item => {setLLToPaidDriverValue(item.value);}}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>LL to Employees of Insured</Text>
          <Dropdown 
            labelField="label" 
            valueField="value" 
            style={styles.dropdown} 
            data={yesOrNoData} 
            placeholder="Select"
            value={llToEmployeesValue} 
            onChange={item => {setLLToEmployeesValue(item.value);}}/>
        </View>

        <View>

          <Text style={styles.heading2}>PA to Paid Drivers, Cleaners and Conductors</Text>

          <View style={styles.heading2BlockBackground}>

            <View style={styles.row}>
              <Text style={styles.text}>No. of Passengers</Text>
              <Dropdown 
                labelField="label" 
                valueField="value" 
                style={styles.dropdown} 
                data={noOfPassengersData} 
                placeholder="Select"
                value={noOfPassengers} 
                onChange={item => {setNoOfPassengers(item.value);}}/>
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
