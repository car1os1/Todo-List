import React from "react";

import { View, Text, StyleSheet } from "react-native";


const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20

    },
    itemLeft:{
        flexDirection:"row",
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:{
        width:25,
        height:25,
        backgroundColor:'#55BCF6',
        opacity:0.4,    
        borderRadius:5,
        marginRight:20
    },
    
    itemText:{
        maxWidth:'80%'
    },

    circular:{
        height: 12,
        width:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5
    },

   

            
})


export default Task