import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import values from '../../../Constants/Values'
import Spacer from '../../../Components/Spacer'

const { width } = Dimensions.get("screen")
const Category = ({category, selectedId, onPress}) => {
    const radioButtonImg = category.id === selectedId ? 
        require('../../../../assets/images/radio-button-on.png') 
        : require('../../../../assets/images/radio-button-off.png')
  return (
    <TouchableOpacity onPress={() => onPress(category)}>
        <View style={[styles.container, {backgroundColor: category.backgroundColor}]}>
            <View style={styles.selectionContainer}>
                <Spacer width={40} />
                <Image style={styles.radiobutton} source={radioButtonImg} />
            </View>
            <Image style={styles.image} source={category.img}/>
            <Text style={[values.h2Style, {marginTop: 10}]}>{category.heading}</Text>
            <Text style={[values.pStyle, { textAlign: 'center', fontWeight: 'bold', marginTop: 5}]}>{category.paragraph}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    container: {
        width: width * 0.35,
        height: 140,
        borderRadius: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    image: {
        width: 45,
        height: 45,
    },
    radiobutton:{
        width: 25,
        height: 25,
        justifyContent: 'left'
    },
    selectionContainer: {
        width: 10,
        height: 25,
        flexDirection: 'row'
    }
})