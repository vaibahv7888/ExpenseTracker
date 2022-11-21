import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
}

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => parseFloat(transaction.amount));
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)
    );
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.textBold}>YOUR BALANCE</Text>
        <Text style={styles.h1Balance}>{moneyFormatter(total)}</Text>
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Text style={styles.textStyle}>Income</Text>
                <Text style={styles.textStyle}>{moneyFormatter(income)}</Text>
            </View>
            <View style={styles.rightSection}>
                <Text style={styles.textStyle}>Expense</Text>
                <Text style={styles.textStyle}>{moneyFormatter(expense)}</Text>
            </View>
        </View>
    </View>
  )
}

export default IncomeExpenses

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#80CEEE',
        width: '100%',
        borderRadius: 10,
        padding: 8,
    },
    container: {
        width: '100%',
        height: 70,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: 'balck'
    },
    leftSection: {
        width: '48%',
        height: '100%',
        borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#8ECC81'
    },
    rightSection: {
        width: '48%',
        height: '100%',
        borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
        backgroundColor: '#FFCCCB'
    },
    textBold: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'regular'
    },
    h1Balance: {
        fontSize: 32,
        fontWeight: 'regular'
    },
    image: {
      width: 35,
      height: 35,
    },
    imageContainer: {
      height: 50,
      width: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
    }
})