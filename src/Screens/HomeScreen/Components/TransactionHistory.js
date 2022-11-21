import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React, { useContext } from 'react'
// import { transactions } from '../../../Constants/Data'
import Transaction from './Transaction'
import { GlobalContext } from '../Context/GlobalState'

const { height } = Dimensions.get("screen")

const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    const { deleteTransaction } = useContext(GlobalContext);
  return (
    <View style={styles.verticalTableView}>
        <FlatList
            data={transactions}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Transaction transaction={item} onPress={(val) => deleteTransaction(val)} />}
        />
    </View>
  )
}

export default TransactionHistory

const styles = StyleSheet.create({
    verticalTableView: {
        height: height * 0.40
    }
})