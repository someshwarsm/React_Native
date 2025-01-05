import { Text, Alert, View } from "react-native";
import SQLite, { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";


export default function calculatePremium() {
    const inputData = useLocalSearchParams();
    
    return (
        <SQLiteProvider databaseName="PremiumRatesDB">
            <View>
                <FinalPremium inputData={inputData}/>
            </View>
        </SQLiteProvider>
    );
}


const FinalPremium =  (props) => {

    const db = useSQLiteContext();

    useEffect(()=>{
        const calculatePremium = async () => {

            var table = {}  // Table is a nested  object in which a cell can be selected by RowSelector and column heading 
            
            
                                ///////////////////////   Calculating TWO WHEELER Premium    ///////////////////////

            if(props.inputData.policy.includes("TwoWheeler")){
                // Fetching premium data from TwoWheeler table
                try{
                    const dbOutput = await db.getAllAsync('SELECT * from TwoWheeler'); 

                    for(const row of dbOutput){
                        table[row["RowSelector"]] = {"0-75": row["0-75"], "75-150": row["75-150"], "150-350": row["150-350"], ">350": row[">350"]}  //RowSelector acts as a key for selecting that entire row
                    }

                }catch(error){
                    console.error("Error while fetching data from table TwoWheeler: ", error)
                }

                if(props.inputData.policy=='TwoWheelerLiabilityPolicy'){

                    let liabilityPremium=0, llToPaidDriverValue=0, llToEmployeesValue=0, paToUnnamedPassengerValue=0, paToOwnerDriver=0, netTPPremium=0, netPremiumPayable=0;
            
                    const resultData = {
                        liabilityPremium,
                        paToOwnerDriver,
                        llToPaidDriverValue,
                        llToEmployeesValue,
                        paToUnnamedPassengerValue,
                        netTPPremium,
                        netPremiumPayable
                    }
            
                    if(props.inputData.cubicCapacity=="< 75 CC"){
                        liabilityPremium=table["TP"]["0-75"]
                    }
                    else if(props.inputData.cubicCapacity=="76-150 CC"){
                        liabilityPremium=table["TP"]["75-150"]
                    }
                    else if(props.inputData.cubicCapacity=="151-350 CC"){
                        liabilityPremium=table["TP"]["150-350"]
                    }
                    else{
                        liabilityPremium=table["TP"][">350"]
                    }
            
                    if(props.inputData.paToOwnerDriverValue=="1 YEAR"){
                        paToOwnerDriver=275
                    }
                    else if(props.inputData.paToOwnerDriverValue=="5 YEAR"){
                        paToOwnerDriver = 275 * 5
                    }
                    
                    
                    if(props.inputData.llToPaidDriverValue=="Yes")
                        llToPaidDriverValue=50
            
                    
                    if(props.inputData.llToEmployeesValue=="Yes")
                        llToEmployeesValue=50
            
                    paToUnnamedPassengerValue = props.inputData.sumInsuredEachValue / 2000;
            
                    paToUnnamedPassengerValue = paToUnnamedPassengerValue * props.inputData.noOfPassengers;
            
                    netTPPremium = liabilityPremium + paToOwnerDriver + llToPaidDriverValue + llToEmployeesValue + paToUnnamedPassengerValue;
            
                    resultData.liabilityPremium=liabilityPremium;
                    resultData.paToOwnerDriver=paToOwnerDriver;
                    resultData.llToEmployeesValue=llToEmployeesValue;
                    resultData.llToPaidDriverValue=llToPaidDriverValue;
                    resultData.paToUnnamedPassengerValue=paToUnnamedPassengerValue
                    resultData.netTPPremium=netTPPremium;
                    resultData.netPremiumPayable = Math.round(netTPPremium + (netTPPremium * 0.18));
                }
                else if(props.inputData.policy=="TwoWheelerPackagePolicy"){

                }
            }

                                ///////////////////////   Calculating PRIVATE CAR Premium    ///////////////////////

            if(props.inputData.policy.includes("PrivateCar")){
                // Fetching premium data from PrivateCar table
                try{
                    const dbOutput = await db.getAllAsync('SELECT * from PrivateCar'); 

                    for(const row of dbOutput){
                        table[row["RowSelector"]] = {"0-1000": row["0-1000"], "1000-1500": row["1000-1500"], ">1500": row[">1500"]}  //RowSelector acts as a key for selecting that entire row
                    }

                }catch(error){
                    console.error("Error while fetching data from table PrivateCar: ", error)
                }

                if(props.inputData.policy=='PrivateCarLiabilityPolicy'){

                    
                }
                else if(props.inputData.policy=="PrivateCarPackagePolicy"){

                }
            }


                                ///////////////////////   Calculating TAXI Premium    ///////////////////////

            if(props.inputData.policy.includes("Taxi")){
                // Fetching premium data from Taxi table
                try{
                    const dbOutput = await db.getAllAsync('SELECT * from Taxi'); 

                    for(const row of dbOutput){
                        table[row["RowSelector"]] = {"0-1000": row["0-1000"], "1000-1500": row["1000-1500"], ">1500": row[">1500"]}  //RowSelector acts as a key for selecting that entire row
                    }

                }catch(error){
                    console.error("Error while fetching data from table Taxi: ", error)
                }

                if(props.inputData.policy=='TaxiLiabilityPolicy'){

                    
                }
                else if(props.inputData.policy=="TaxiPackagePolicy"){

                }
            }


                                ///////////////////////   Calculating SCHOOL BUS Premium    ///////////////////////

            if(props.inputData.policy.includes("SchoolBus")){
                // Fetching premium data from SchoolBus table
                try{
                    const dbOutput = await db.getAllAsync('SELECT * from SchoolBus'); 

                    for(const row of dbOutput){
                        table[row["RowSelector"]] = {"Rate": row["Rate"]}  //RowSelector acts as a key for selecting that entire row
                    }

                }catch(error){
                    console.error("Error while fetching data from table SchoolBus: ", error)
                }

                if(props.inputData.policy=='SchoolBusLiabilityPolicy'){

                    
                }
                else if(props.inputData.policy=="SchoolBusPackagePolicy"){

                }
            }


                                ///////////////////////   Calculating BUS Premium    ///////////////////////

            if(props.inputData.policy.includes("Bus")){
                // Fetching premium data from Bus table
                try{
                    const dbOutput = await db.getAllAsync('SELECT * from Bus'); 

                    for(const row of dbOutput){
                        table[row["RowSelector"]] = {"Rate": row["Rate"]}  //RowSelector acts as a key for selecting that entire row
                    }

                }catch(error){
                    console.error("Error while fetching data from table Bus: ", error)
                }

                if(props.inputData.policy=='BusLiabilityPolicy'){

                    
                }
                else if(props.inputData.policy=="BusPackagePolicy"){

                }
            }

                                ///////////////////////   Calculating PCV 3-Wheeler Premium    ///////////////////////

            if(props.inputData.policy.includes("PCV3Wheeler")){
                // Fetching premium data from PCV3Wheeler table
                try{
                    const dbOutput = await db.getAllAsync('SELECT * from PCV3Wheeler'); 

                    for(const row of dbOutput){
                        table[row["RowSelector"]] = {"Rate": row["Rate"]}  //RowSelector acts as a key for selecting that entire row
                    }

                }catch(error){
                    console.error("Error while fetching data from table PCV3Wheeler: ", error)
                }

                if(props.inputData.policy=='PCV3WheelerLiabilityPolicy'){

                    
                }
                else if(props.inputData.policy=="PCV3WheelerPackagePolicy"){

                }
            }


                                ///////////////////////   Calculating GCV 3-Wheeler Premium    ///////////////////////

            if(props.inputData.policy.includes("GCV3Wheeler")){
                // Fetching premium data from GCV3Wheeler table
                try{
                    const dbOutput = await db.getAllAsync('SELECT * from GCV3Wheeler'); 

                    for(const row of dbOutput){
                        table[row["RowSelector"]] = {"Rate": row["Rate"]}  //RowSelector acts as a key for selecting that entire row
                    }

                }catch(error){
                    console.error("Error while fetching data from table GCV3Wheeler: ", error)
                }

                if(props.inputData.policy=='GCV3WheelerLiabilityPolicy'){

                    
                }
                else if(props.inputData.policy=="GCV3WheelerPackagePolicy"){

                }
            }


                                ///////////////////////   Calculating GCV Premium    ///////////////////////

            if(props.inputData.policy.includes("GCV")){
                // Fetching premium data from GCV table
                try{
                    const dbOutput = await db.getAllAsync('SELECT * from GCV'); 

                    for(const row of dbOutput){
                        table[row["RowSelector"]] = {"0-7500": row["0-7500"], "7500-12000": row["7500-12000"], "12000-20000": row["12000-20000"], "20000-40000": row["20000-40000"], ">40000": row[">40000"]}  //RowSelector acts as a key for selecting that entire row
                    }

                }catch(error){
                    console.error("Error while fetching data from table GCV: ", error)
                }

                if(props.inputData.policy=='GCVLiabilityPolicy'){

                    
                }
                else if(props.inputData.policy=="GCVPackagePolicy"){

                }
            }


                                ///////////////////////   Calculating TRACTOR Premium    ///////////////////////

            if(props.inputData.policy.includes("Tractor")){
                // Fetching premium data from Tractor table
                try{
                    const dbOutput = await db.getAllAsync('SELECT * from Tractor'); 

                    for(const row of dbOutput){
                        table[row["RowSelector"]] = {"Rate": row["Rate"]}  //RowSelector acts as a key for selecting that entire row
                    }

                }catch(error){
                    console.error("Error while fetching data from table Tractor: ", error)
                }

                if(props.inputData.policy=='TractorLiabilityPolicy'){

                    
                }
                else if(props.inputData.policy=="TractorPackagePolicy"){

                }
            }

        }
    calculatePremium()}, [props.inputData]);

    

    return(
        <View>
            <Text>Result page</Text>
        </View>
    );
}





