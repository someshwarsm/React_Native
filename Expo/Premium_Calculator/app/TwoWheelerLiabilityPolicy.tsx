import { Text, TextInput, View, ScrollView, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import RNDateTimePicker  from '@react-native-community/datetimepicker';
import { Link, router } from "expo-router";
import calculatePremium from "./backendCode";



export default function TwoWheelerPackagePolicy() {
  const [typeOfPolicy, setTypeOfPolicy] = useState("")
  const [cubicCapacity, setCubicCapacity] = useState("")
  const [paOwnerDriverValue, setPAOwnerDriverValue] = useState("")
  const [llToPaidDriverValue, setLLToPaidDriverValue] = useState("")
  const [llToEmployeesValue, setLLToEmployeesValue] = useState("")
  const [noOfPassengers, setNoOfPassengers] = useState("")
  const [sumInsuredEachValue, setSumInsuredEachValue] = useState("")
  const [tppdValue, setTPPDValue] = useState("")


  const inputData = {
    typeOfPolicy,
    cubicCapacity,
    paOwnerDriverValue,
    llToPaidDriverValue,
    llToEmployeesValue,
    noOfPassengers,
    sumInsuredEachValue,
    tppdValue,
  };




  const typeOfPolicyData = [{label: 'ONE YEAR', value:'ONE YEAR'}, {label: 'FIVE YEAR', value:'FIVE YEAR'}]
  const cubicCapacityData = [{label: '< 75 CC', value:'< 75 CC'}, 
    {label: '76-150 CC', value:'76-150 CC'}, 
    {label: '151-300 CC', value:'151-300 CC'}, 
    {label: '301-350 CC', value:'301-350 CC'}, 
    {label: 'Exceeding 350 CC', value:'Exceeding 350 CC'}]
  const yesOrNoData = [{label: 'Yes', value:'Yes'}, {label: 'No', value:'No'}]
  const paOwnerDriverData = [{label: 'No', value:'No'}, {label: '1 YEAR', value:'1 YEAR'}, {label: '5 YEAR', value:'5 YEAR'}]
  const noOfPassengersData = [{label: '0', value:'0'}, {label: '1', value:'1'}, {label: '2', value:'2'}]
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
  const tppdData = [{label: 'RS 1 Lakh', value:'RS 1 Lakh'}, {label: 'RS 6000', value:'RS 6000'}]


  


  const handleCalculateButton = () => {
    let resultData = calculatePremium(inputData)
    router.push({pathname: `/result`, params: resultData})
  }




  return (
    <ScrollView
      style={{
        flex: 1
      }}
    >
      
      <View style={styles.row}>
        <Text style={styles.text}>Type of Policy</Text>
        <Dropdown 
          labelField="label" 
          valueField="value" 
          style={styles.dropdown} 
          data={typeOfPolicyData} 
          placeholder="Select"
          value={typeOfPolicy} 
          onChange={item => {setTypeOfPolicy(item.value);}}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Cubic Capacity</Text>
        <Dropdown 
          labelField="label" 
          valueField="value" 
          style={styles.dropdown} 
          data={cubicCapacityData} 
          placeholder="Select"
          value={cubicCapacity} 
          onChange={item => {setCubicCapacity(item.value);}}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>PA Owner-Driver</Text>
        <Dropdown 
          labelField="label" 
          valueField="value" 
          style={styles.dropdown} 
          data={paOwnerDriverData} 
          placeholder="Select"
          value={paOwnerDriverValue} 
          onChange={item => {setPAOwnerDriverValue(item.value);}}/>
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

      <Button title="Calculate" onPress={handleCalculateButton} />

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
    backgroundColor:"black",
    borderWidth:0.5,
    borderRadius: 5,
    margin: 50,
    color: "white",
    height: 70,
    fontSize: 20
  }
})