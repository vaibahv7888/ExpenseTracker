import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Greeter from './Components/Greeter'
import styles from './Styles'
import CustomButton from '../../Components/CustomButton'
import Spacer from '../../Components/Spacer'
import values from '../../Constants/Values'
import colors from '../../Constants/Colors'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionHistory from './Components/TransactionHistory'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.horizontalPaddingView}>
            <Greeter user={{
                img: require('../../../assets/images/profileLogo.png'),
                name: 'John'
            }}/>
            <Spacer height={20}/>
            <IncomeExpenses />
            <Spacer height={20}/>
            <Text style={values.h2Style}>Transaction history</Text>
            <Spacer height={20}/>
            {/* <CustomInput placeholder= 'Search' icon='search-outline' />
            <Spacer height={10}/> */}
            <TransactionHistory />
        </View>
        {/* <AddTransactions /> */}
        <View style={styles.horizontalPaddingView}>
          <CustomButton 
          width= '100%' 
          height={50} 
          radius={15} 
          textSize={24} 
          text='Add transaction'
          backgroundColor={colors.orage}
          onPress={() => navigation.navigate('AddTransaction', { headerShown: false })}
          />
         </View>
    </SafeAreaView>
  )
}

export default HomeScreen