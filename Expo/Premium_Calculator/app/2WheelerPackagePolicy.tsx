import { Text, TextInput, View, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Button } from 'react-native'
import RNDateTimePicker  from '@react-native-community/datetimepicker';



export default function PolicyType() {
  const [typeOfVehicle, setTypeOfVehicle] = useState("")
  const [cubicCapacity, setCubicCapacity] = useState("")
  const [zone, setZone] = useState("")
  const [policyType, setPolicyType] = useState("")
  const [dateOfPurchase, setDateOfPurchase] = useState(new Date())
  const [isDatePickerPurchaseVisible, setDatePickerPurchaseVisibility] = useState(false);
  const [isDatePickerRenewalVisible, setDatePickerRenewalVisibility] = useState(false);
  const [dateOfRenewal, setDateOfRenewal] = useState(new Date())
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
  const [voluntaryDeductibleValue, setVoluntaryDeductibleValue] = useState("")
  const [antiTheftValue, setAntiTheftValue] = useState("")
  const [automobileAssociationValue, setAutomobileAssociationValue] = useState("")
  const [paOwnerDriverValue, setPAOwnerDriverValue] = useState("")
  const [llToPaidDriverValue, setLLToPaidDriverValue] = useState("")
  const [llToEmployeesValue, setLLToEmployeesValue] = useState("")
  const [noOfPassengers, setNoOfPassengers] = useState("")
  const [sumInsuredEachValue, setSumInsuredEachValue] = useState("")
  const [tppdValue, setTPPDValue] = useState("")




  const typeOfVehicleData = [{label: 'New', value:'New'}, {label: 'Pre-owned', value:'Pre-Owned'}]
  const cubicCapacityData = [{label: '< 75 CC', value:'< 75 CC'}, 
    {label: '76-150 CC', value:'76-150 CC'}, 
    {label: '151-300 CC', value:'151-300 CC'}, 
    {label: '301-350 CC', value:'301-350 CC'}, 
    {label: 'Exceeding 350 CC', value:'Exceeding 350 CC'}]
  const zoneData = [{label: 'Zone A', value:'Zone A'}, {label: 'Zone B', value:'Zone B'}]
  const policyTypeData = [{label: 'BUNDLED', value:'BUNDLED'}, {label: 'LONG TERM', value:'LONG TERM'}]
  const yesOrNoData = [{label: 'Yes', value:'Yes'}, {label: 'No', value:'No'}]
  const voluntaryDeductibleData = [{label: '0', value:'0'}, {label: '500', value:'500'}, {label: '750', value:'750'}, {label: '1000', value:'1000'}, {label: '1500', value:'1500'}, {label: '3000', value:'3000'}]
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
  





  const showDatePickerForPurchase = () => {
    setDatePickerPurchaseVisibility(true);
  };

  const showDatePickerForRenewal = () => {
    setDatePickerRenewalVisibility(true);
  };

  const handleDateOfPurchase = (event, date) =>{
    setDateOfPurchase(date);
    setDatePickerPurchaseVisibility(false)
  };

  const handleDateOfRenewal = (event, date) =>{
    setDateOfRenewal(date)
    setDatePickerRenewalVisibility(false)
  };




  return (
    <ScrollView
      style={{
        flex: 1
      }}
    >
      
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
        <Text style={styles.text}>Policy Type</Text>
        <Dropdown 
          labelField="label" 
          valueField="value" 
          style={styles.dropdown} 
          data={policyTypeData} 
          placeholder="Select"
          value={policyType} 
          onChange={item => {setPolicyType(item.value);}}/>
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
        {isDatePickerPurchaseVisible && (<RNDateTimePicker display="spinner" value={dateOfPurchase} onChange={handleDateOfPurchase} positiveButton={{textColor: "white"}} negativeButton={{textColor: "white"}}/>)}
        <TextInput style={styles.textInput} value={dateOfPurchase.toISOString().substring(0, 10)} onPress={showDatePickerForPurchase}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Renewal Date</Text>
        {isDatePickerRenewalVisible && (<RNDateTimePicker display="spinner" value={dateOfRenewal} onChange={handleDateOfRenewal} positiveButton={{textColor: "white"}} negativeButton={{textColor: "white"}}/>)}
        <TextInput style={styles.textInput} value={dateOfRenewal.toISOString().substring(0, 10)} onPress={showDatePickerForRenewal}/>
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
        <TextInput style={styles.textInput} placeholder="Enter the NCB Value" value={ncbValue} onChange={event => setNCBValue(event.nativeEvent.text)} inputMode="numeric"/>
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
          data={yesOrNoData} 
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
        <Text style={styles.text}>Voluntary Deductible</Text>
        <Dropdown 
          labelField="label" 
          valueField="value" 
          style={styles.dropdown} 
          data={voluntaryDeductibleData} 
          placeholder="Select"
          value={voluntaryDeductibleValue} 
          onChange={item => {setVoluntaryDeductibleValue(item.value);}}/>
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
        <Text style={styles.text}>Automobile Association</Text>
        <Dropdown 
          labelField="label" 
          valueField="value" 
          style={styles.dropdown} 
          data={yesOrNoData} 
          placeholder="Select"
          value={automobileAssociationValue} 
          onChange={item => {setAutomobileAssociationValue(item.value);}}/>
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

      <Button title="Calculate"/>

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
  }
})
