import React, { useEffect, useState } from "react";
import {Text, TextInput, TouchableOpacity, View, StyleSheet, Alert, Modal, Button } from "react-native";
import {Link} from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SQLite from 'expo-sqlite';
import { Dropdown } from "react-native-element-dropdown";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import DropdownMenu from "./Components/DropdownMenu"



export async function initializeDatabase(db) {

    //Code to delete tables
    // try {
    //     await db.execAsync(`
    //     PRAGMA journal_mode = WAL;
    //     DROP TABLE TwoWheeler;
    //     DROP TABLE PrivateCar;
    //     DROP TABLE Taxi;
    //     DROP TABLE Bus;
    //     DROP TABLE SchoolBus;
    //     DROP TABLE GCV;
    //     DROP TABLE GCV3Wheeler;
    //     DROP TABLE PCV3Wheeler;
    //     DROP TABLE Tractor;
    //     `);
    //     console.log('All the tables have been deleted successfully');
    // } catch (error) {
    //     console.error('Error while deleting the tables: ', error);
    // }
    
    const isInitialized = await AsyncStorage.getItem('DB_INITIALIZED');

    //Creating all the tables only during installation of APP
    console.log("isInitialized value :"+isInitialized)
    if(isInitialized=='true'){
        console.log('Database has been initialized during installation of APP.')
        return;
    }

    //Creating TwoWheeler table and inserting the data
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS TwoWheeler (RowSelector TEXT NOT NULL, "0-75" FLOAT NOT NULL, "75-150"  FLOAT NOT NULL, "150-350"  FLOAT NOT NULL, ">350"  FLOAT NOT NULL);
        INSERT INTO TwoWheeler VALUES ('0 TO 5', 1.676, 1.676, 1.76, 1.844);
        INSERT INTO TwoWheeler VALUES ('5 TO 10', 1.76, 1.76, 1.848, 1.936);
        INSERT INTO TwoWheeler VALUES ('ABOVE 10', 1.802, 1.802, 1.892, 1.982);
        INSERT INTO TwoWheeler VALUES ('TP', 538, 714, 1366, 2804);
        `);
        console.log('TwoWheeler table created and data inserted successfully');
    } catch (error) {
        console.error('Error while creating table TwoWheeler or inserting data into table: ', error);
    }

    //Creating PrivateCar table and inserting the data
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS PrivateCar (RowSelector TEXT NOT NULL, "0-1000"  FLOAT NOT NULL, "1000-1500"  FLOAT NOT NULL, ">1500"  FLOAT NOT NULL);
        INSERT INTO PrivateCar VALUES ('0 TO 5', 3.039, 3.191, 3.343);
        INSERT INTO PrivateCar VALUES ('5 TO 10', 3.191, 3.351, 3.510);
        INSERT INTO PrivateCar VALUES ('ABOVE 10', 3.267, 3.43, 3.594);
        INSERT INTO PrivateCar VALUES ('TP', 2094, 3416, 7897);
        `);
        console.log('PrivateCar table created and data inserted successfully');
    } catch (error) {
        console.error('Error while creating table PrivateCar or inserting data into table: ', error);
    }

    //Creating Taxi table and inserting the data
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS Taxi (RowSelector TEXT NOT NULL, "0-1000"  FLOAT NOT NULL, "1000-1500"  FLOAT NOT NULL, ">1500"  FLOAT NOT NULL);
        INSERT INTO Taxi VALUES ('0 TO 5', 3.191, 3.351, 3.51);
        INSERT INTO Taxi VALUES ('5 TO 7', 3.271, 3.435, 3.598);
        INSERT INTO Taxi VALUES ('ABOVE 7', 3.351, 3.519, 3.686);
        INSERT INTO Taxi VALUES ('PSNGR', 1110, 934, 1067);
        INSERT INTO Taxi VALUES ('TP', 6040, 7940, 10523);
        INSERT INTO Taxi VALUES ('PAX', 1162, 978, 1117);
        `);
        console.log('Taxi table created and data inserted successfully');
    } catch (error) {
        console.error('Error while creating table Taxi or inserting data into table: ', error);
    }

    //Creating Bus table and inserting the data
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS Bus (RowSelector TEXT NOT NULL, Rate FLOAT NOT NULL);
        INSERT INTO Bus VALUES ('0 TO 5', 1.656);
        INSERT INTO Bus VALUES ('5 TO 10', 1.697);
        INSERT INTO Bus VALUES ('ABOVE 10', 1.739);
        INSERT INTO Bus VALUES ('TP', 14343);
        INSERT INTO Bus VALUES ('PAX', 877);
        `);
        console.log('Bus table created and data inserted successfully');
    } catch (error) {
        console.error('Error while creating table Bus or inserting data into table: ', error);
    }

    //Creating SchoolBus table and inserting the data
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS SchoolBus (RowSelector TEXT NOT NULL, Rate FLOAT NOT NULL);
        INSERT INTO SchoolBus VALUES ('0 TO 5', 1.656);
        INSERT INTO SchoolBus VALUES ('5 TO 10', 1.697);
        INSERT INTO SchoolBus VALUES ('ABOVE 10', 1.739);
        INSERT INTO SchoolBus VALUES ('TP', 12192);
        INSERT INTO SchoolBus VALUES ('PAX', 745);
        `);
        console.log('SchoolBus table created and data inserted successfully');
    } catch (error) {
        console.error('Error while creating table SchoolBus or inserting data into table: ', error);
    }

    //Creating GCV table and inserting the data
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS GCV (RowSelector TEXT NOT NULL, "0-7500"  FLOAT NOT NULL, "75000-12000"  FLOAT NOT NULL, "12000-20000"  FLOAT NOT NULL, "20000-40000"  FLOAT NOT NULL, ">40000"  FLOAT NOT NULL);
        INSERT INTO GCV VALUES ('0 TO 5', 1.726, 1.726, 1.726, 1.726, 1.726);
        INSERT INTO GCV VALUES ('5 TO 7', 1.77, 1.77, 1.77, 1.77, 1.77);
        INSERT INTO GCV VALUES ('ABOVE 7', 1.812, 1.812, 1.812, 1.812, 1.812);
        INSERT INTO GCV VALUES ('TP', 16049, 27186, 35313, 43950, 44242);
        INSERT INTO GCV VALUES ('Extra', 0, 0, 27, 27, 27);
        `);
        console.log('GCV table created and data inserted successfully');
    } catch (error) {
        console.error('Error while creating table GCV or inserting data into table: ', error);
    }

    //Creating PCV3Wheeler table and inserting the data
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS PCV3Wheeler (RowSelector TEXT NOT NULL, Rate FLOAT NOT NULL);
        INSERT INTO PCV3Wheeler VALUES ('0 TO 5', 1.26);
        INSERT INTO PCV3Wheeler VALUES ('5 TO 7', 1.292);
        INSERT INTO PCV3Wheeler VALUES ('ABOVE 7', 1.323);
        INSERT INTO PCV3Wheeler VALUES ('PSNGR', 1241);
        INSERT INTO PCV3Wheeler VALUES ('TP', 2539);
        INSERT INTO PCV3Wheeler VALUES ('PAX', 1214);
        `);
        console.log('PCV3Wheeler table created and data inserted successfully');
    } catch (error) {
        console.error('Error while creating table PCV3Wheeler or inserting data into table: ', error);
    }

    //Creating GCV3Wheeler table and inserting the data
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS GCV3Wheeler (RowSelector TEXT NOT NULL, Rate FLOAT NOT NULL);
        INSERT INTO GCV3Wheeler VALUES ('0 TO 5', 1.64);
        INSERT INTO GCV3Wheeler VALUES ('5 TO 7', 1.681);
        INSERT INTO GCV3Wheeler VALUES ('ABOVE 7', 1.722);
        INSERT INTO GCV3Wheeler VALUES ('TP', 4492);
        `);
        console.log('GCV3Wheeler table created and data inserted successfully');
    } catch (error) {
        console.error('Error while creating table GCV3Wheeler or inserting data into table: ', error);
    }

    //Creating Tractor table and inserting the data
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS Tractor (RowSelector TEXT NOT NULL, Rate FLOAT NOT NULL);
        INSERT INTO Tractor VALUES ('0 TO 5', 1.19);
        INSERT INTO Tractor VALUES ('5 TO 7', 1.22);
        INSERT INTO Tractor VALUES ('ABOVE 7', 1.25);
        INSERT INTO Tractor VALUES ('TRCTR TP', 7267);
        INSERT INTO Tractor VALUES ('TRLR TP', 2485);
        `);
        console.log('Tractor table created and data inserted successfully');
    } catch (error) {
        console.error('Error while creating table Tractor or inserting data into table: ', error);
    }

    // Set the initialization flag in AsyncStorage
    try {
        await AsyncStorage.setItem('DB_INITIALIZED', 'true');
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error setting DB_INITIALIZED flag in AsyncStorage: ', error);
    }
}


export default function premiumRates() {

    return (

        <SQLiteProvider databaseName="PremiumRatesDB" onInit={initializeDatabase} >
            <View>
                <ComponentToViewOrEditPremiumRates />
            </View>
        </SQLiteProvider>
        
    );
}

const ComponentToViewOrEditPremiumRates = () => {
    const [is2WheelerDropdownVisible, set2WheelerDropdownVisible] = useState(false);
    const [isPrivateCarDropdownVisible, setPrivateCarDropdownVisible] = useState(false);
    const [isTaxiDropdownVisible, setTaxiDropdownVisible] = useState(false);
    const [isBusDropdownVisible, setBusDropdownVisible] = useState(false);
    const [isSchoolBusDropdownVisible, setSchoolBusDropdownVisible] = useState(false);
    const [isGCVDropdownVisible, setGCVDropdownVisible] = useState(false);
    const [isGCV3WheelerDropdownVisible, setGCV3WheelerDropdownVisible] = useState(false);
    const [isPCV3WheelerDropdownVisible, setPCV3WheelerDropdownVisible] = useState(false);
    const [isTractorDropdownVisible, setTractorDropdownVisible] = useState(false);

    const toggle2WheelerDropdown = () => {
        set2WheelerDropdownVisible(false);
        setPrivateCarDropdownVisible(false);
        setTaxiDropdownVisible(false);
        setBusDropdownVisible(false);
        setSchoolBusDropdownVisible(false);
        setGCVDropdownVisible(false);
        setGCV3WheelerDropdownVisible(false);
        setPCV3WheelerDropdownVisible(false);
        setTractorDropdownVisible(false);
        set2WheelerDropdownVisible(!is2WheelerDropdownVisible);
    };

    const togglePrivateCarDropdown = () => {
        set2WheelerDropdownVisible(false);
        setPrivateCarDropdownVisible(false);
        setTaxiDropdownVisible(false);
        setBusDropdownVisible(false);
        setSchoolBusDropdownVisible(false);
        setGCVDropdownVisible(false);
        setGCV3WheelerDropdownVisible(false);
        setPCV3WheelerDropdownVisible(false);
        setTractorDropdownVisible(false);
        setPrivateCarDropdownVisible(!isPrivateCarDropdownVisible);
    };

    const toggleTaxiDropdown = () => {
        set2WheelerDropdownVisible(false);
        setPrivateCarDropdownVisible(false);
        setTaxiDropdownVisible(false);
        setBusDropdownVisible(false);
        setSchoolBusDropdownVisible(false);
        setGCVDropdownVisible(false);
        setGCV3WheelerDropdownVisible(false);
        setPCV3WheelerDropdownVisible(false);
        setTractorDropdownVisible(false);
        setTaxiDropdownVisible(!isTaxiDropdownVisible);
    };

    const toggleBusDropdown = () => {
        set2WheelerDropdownVisible(false);
        setPrivateCarDropdownVisible(false);
        setTaxiDropdownVisible(false);
        setBusDropdownVisible(false);
        setSchoolBusDropdownVisible(false);
        setGCVDropdownVisible(false);
        setGCV3WheelerDropdownVisible(false);
        setPCV3WheelerDropdownVisible(false);
        setTractorDropdownVisible(false);
        setBusDropdownVisible(!isBusDropdownVisible);
    };

    const toggleSchoolBusDropdown = () => {
        set2WheelerDropdownVisible(false);
        setPrivateCarDropdownVisible(false);
        setTaxiDropdownVisible(false);
        setBusDropdownVisible(false);
        setSchoolBusDropdownVisible(false);
        setGCVDropdownVisible(false);
        setGCV3WheelerDropdownVisible(false);
        setPCV3WheelerDropdownVisible(false);
        setTractorDropdownVisible(false);
        setSchoolBusDropdownVisible(!isSchoolBusDropdownVisible);
    };

    const toggleGCVDropdown = () => {
        set2WheelerDropdownVisible(false);
        setPrivateCarDropdownVisible(false);
        setTaxiDropdownVisible(false);
        setBusDropdownVisible(false);
        setSchoolBusDropdownVisible(false);
        setGCVDropdownVisible(false);
        setGCV3WheelerDropdownVisible(false);
        setPCV3WheelerDropdownVisible(false);
        setTractorDropdownVisible(false);
        setGCVDropdownVisible(!isGCVDropdownVisible);
    };

    const togglePCV3WheelerDropdown = () => {
        set2WheelerDropdownVisible(false);
        setPrivateCarDropdownVisible(false);
        setTaxiDropdownVisible(false);
        setBusDropdownVisible(false);
        setSchoolBusDropdownVisible(false);
        setGCVDropdownVisible(false);
        setGCV3WheelerDropdownVisible(false);
        setPCV3WheelerDropdownVisible(false);
        setTractorDropdownVisible(false);
        setPCV3WheelerDropdownVisible(!isPCV3WheelerDropdownVisible);
    };

    const toggleGCV3WheelerDropdown = () => {
        set2WheelerDropdownVisible(false);
        setPrivateCarDropdownVisible(false);
        setTaxiDropdownVisible(false);
        setBusDropdownVisible(false);
        setSchoolBusDropdownVisible(false);
        setGCVDropdownVisible(false);
        setGCV3WheelerDropdownVisible(false);
        setPCV3WheelerDropdownVisible(false);
        setTractorDropdownVisible(false);
        setGCV3WheelerDropdownVisible(!isGCV3WheelerDropdownVisible);
    };

    const toggleTractorDropdown = () => {
        set2WheelerDropdownVisible(false);
        setPrivateCarDropdownVisible(false);
        setTaxiDropdownVisible(false);
        setBusDropdownVisible(false);
        setSchoolBusDropdownVisible(false);
        setGCVDropdownVisible(false);
        setGCV3WheelerDropdownVisible(false);
        setPCV3WheelerDropdownVisible(false);
        setTractorDropdownVisible(false);
        setTractorDropdownVisible(!isTractorDropdownVisible);
    };

    const db = useSQLiteContext();

    const [tableData, setTableData] = useState<string[][]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const viewTable = async (tableName: String) => {
        let dbOutput;

        try {
            dbOutput = await db.getAllAsync('SELECT * from '+tableName); // Wait for the data to be fetched
        } catch (error) {
            console.error("Error fetching data for table:", error);
        } 

        if(tableName=="TwoWheeler"){
            let table = [['RowSelector', '0-75', '75-150', '150-350', '>350']]
            for (const row of dbOutput) {
                table.push([row['RowSelector'], row['0-75'], row['75-150'], row['150-350'], row['>350']])
            }
            setTableData(table)
        }
        else if(tableName=="PrivateCar"){
            let table = [['RowSelector', '0-1000', '1000-1500', '>1500']]
            for (const row of dbOutput) {
                table.push([row['RowSelector'], row['0-1000'], row['1000-1500'], row['>1500']])
            }
            setTableData(table)
        }
        else if(tableName=="Taxi"){
            let table = [['RowSelector', '0-1000', '1000-1500', '>1500']]
            for (const row of dbOutput) {
                table.push([row['RowSelector'], row['0-1000'], row['1000-1500'], row['>1500']])
            }
            setTableData(table)
        }
        else if(tableName=="Bus"){
            let table = [['RowSelector', 'Rate']]
            for (const row of dbOutput) {
                table.push([row['RowSelector'], row['Rate']])
            }
            setTableData(table)
        }
        else if(tableName=="SchoolBus"){
            let table = [['RowSelector', 'Rate']]
            for (const row of dbOutput) {
                table.push([row['RowSelector'], row['Rate']])
            }
            setTableData(table)
        }
        else if(tableName=="GCV"){
            let table = [['RowSelector', '0-7500', '75000-12000', '12000-20000', '20000-40000', '>40000']]
            for (const row of dbOutput) {
                table.push([row['RowSelector'], row['0-7500'], row['75000-12000'], row['12000-20000'], row['20000-40000'], row['>40000']])
            }
            setTableData(table)
        }
        else if(tableName=="GCV3Wheeler"){
            let table = [['RowSelector', 'Rate']]
            for (const row of dbOutput) {
                table.push([row['RowSelector'], row['Rate']])
            }
            setTableData(table)
        }
        else if(tableName=="PCV3Wheeler"){
            let table = [['RowSelector', 'Rate']]
            for (const row of dbOutput) {
                table.push([row['RowSelector'], row['Rate']])
            }
            setTableData(table)
        }
        else if(tableName=="Tractor"){
            let table = [['RowSelector', 'Rate']]
            for (const row of dbOutput) {
                table.push([row['RowSelector'], row['Rate']])
            }
            setTableData(table)
        }
        
        toggleModal();
    }


    return (
        <ScrollView>
            <DropdownMenu mainText="2 Wheeler" toggleDropdown={toggle2WheelerDropdown} isDropdownVisible={is2WheelerDropdownVisible} viewTable={viewTable} tableName="TwoWheeler" option1Text="View Premium Rate Table" option2Text="Edit Premium Rate Table" />
            <DropdownMenu mainText="Private Car" toggleDropdown={togglePrivateCarDropdown} isDropdownVisible={isPrivateCarDropdownVisible} viewTable={viewTable} tableName="PrivateCar" option1Text="View Premium Rate Table" option2Text="Edit Premium Rate Table" />
            <DropdownMenu mainText="Taxi" toggleDropdown={toggleTaxiDropdown} isDropdownVisible={isTaxiDropdownVisible} viewTable={viewTable} tableName="Taxi" option1Text="View Premium Rate Table" option2Text="Edit Premium Rate Table" />
            <DropdownMenu mainText="Bus" toggleDropdown={toggleBusDropdown} isDropdownVisible={isBusDropdownVisible} viewTable={viewTable} tableName="Bus" option1Text="View Premium Rate Table" option2Text="Edit Premium Rate Table" />
            <DropdownMenu mainText="School Bus" toggleDropdown={toggleSchoolBusDropdown} isDropdownVisible={isSchoolBusDropdownVisible} viewTable={viewTable} tableName="SchoolBus" option1Text="View Premium Rate Table" option2Text="Edit Premium Rate Table" />
            <DropdownMenu mainText="GCV" toggleDropdown={toggleGCVDropdown} isDropdownVisible={isGCVDropdownVisible} viewTable={viewTable} tableName="GCV" option1Text="View Premium Rate Table" option2Text="Edit Premium Rate Table" />
            <DropdownMenu mainText="PCV 3 Wheeler" toggleDropdown={togglePCV3WheelerDropdown} isDropdownVisible={isPCV3WheelerDropdownVisible} viewTable={viewTable} tableName="PCV3Wheeler" option1Text="View Premium Rate Table" option2Text="Edit Premium Rate Table" />
            <DropdownMenu mainText="GCV 3 Wheeler" toggleDropdown={toggleGCV3WheelerDropdown} isDropdownVisible={isGCV3WheelerDropdownVisible} viewTable={viewTable} tableName="GCV3Wheeler" option1Text="View Premium Rate Table" option2Text="Edit Premium Rate Table" />
            <DropdownMenu mainText="Tractor" toggleDropdown={toggleTractorDropdown} isDropdownVisible={isTractorDropdownVisible} viewTable={viewTable} tableName="Tractor" option1Text="View Premium Rate Table" option2Text="Edit Premium Rate Table" />

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView horizontal>
                    <View>
                        {tableData.map((row, rowIndex) => (
                        <View
                            key={rowIndex}
                            style={[
                            styles.row,
                            rowIndex === 0 ? styles.headerRow : styles.dataRow,
                            ]}
                        >
                            {row.map((cell, cellIndex) => (
                            <Text
                                key={cellIndex}
                                style={[
                                styles.cell,
                                rowIndex === 0 ? styles.headerCell : styles.dataCell,
                                ]}
                            >
                                {cell}
                            </Text>
                            ))}
                        </View>
                        ))}
                    </View>
                    </ScrollView>
                    <Button title="Close" onPress={toggleModal} />
                </View>
                </View>
            </Modal>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '90%',
      maxHeight: '80%',
    },
    row: {
      flexDirection: 'row',
    },
    headerRow: {
      backgroundColor: '#ddd',
    },
    dataRow: {
      backgroundColor: '#fff',
    },
    cell: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      width: 100,
      textAlign: 'center',
    },
    headerCell: {
      fontWeight: 'bold',
    },
    dataCell: {
      color: '#000',
    },
  });
  