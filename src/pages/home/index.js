
import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from 'react-native';
export default function Home(){
    return(
      
    
        <View style={styles.container}>
            <Text style={styles.text}>
                Pagina Home
            </Text>
        </View>
       
    )
}


const styles = StyleSheet.create({
    container:{
        borderTopColor:'#121212',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text:{
        fontSize:25,
        fontWeight:'bold'
    }

})