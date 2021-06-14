import { bold } from 'ansi-colors';
import { styleSheets } from 'min-document';
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function Notification(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Pagina Notification
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text:{
        fontSize:25,
        fontWeight:'bold'
    }

})