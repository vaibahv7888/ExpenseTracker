import { StyleSheet, Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import values from '../../../Constants/Values'

const Greeter = ({user}) => {
    return (
      <View style = {styles.container}>
        <View>
            <Text style={values.h1Style}>Hello, {user.name}</Text>
            <Text style={values.pStyle}>Welcome back to Expense Tracker</Text>
        </View>
        <Image style={styles.image} source={user.img}/>
      </View>
    )
  }

export default Greeter

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    image: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white'
    }
});