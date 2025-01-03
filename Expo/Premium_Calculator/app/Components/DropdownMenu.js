import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export default function DropdownMenu(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.toggleDropdown}>
                <Text style={styles.buttonText}>{props.mainText}</Text>
            </TouchableOpacity>
            {props.isDropdownVisible && (
                <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => props.viewTable(props.tableName)}>
                    <Text style={styles.dropdownItem}>{props.option1Text}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Option 2')}>
                    <Text style={styles.dropdownItem}>{props.option2Text}</Text>
                </TouchableOpacity>
                </View>
            )}
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    //   alignItems: 'center',
      marginBottom: 5
    },
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    dropdown: {
      marginTop: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 5,
      padding: 10,
    },
    dropdownItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
  });
