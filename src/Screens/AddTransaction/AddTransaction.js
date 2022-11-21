import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../HomeScreen/Context/GlobalState';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import styles from '../HomeScreen/Styles';
import colors from '../../Constants/Colors';
import values from '../../Constants/Values';
import Spacer from '../../Components/Spacer';
import { IncomeExpenseCategory } from '../../Constants/Data'
import Category from '../HomeScreen/Components/Category';


const AddTransaction = ({ navigation, route }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const [selectedItem, setSelectedItem] = useState(IncomeExpenseCategory[0]);

  const onSubmit = e => {
    e.preventDefault();
      // const backgroundColor = amount > 0 ? '#8ECC81' : '#FFCCCB'
      // const img = amount > 0 ? require('../../../assets/images/piggy-bank.png') : require('../../../assets/images/maestro.png')
      // const img = selectedId == 1 ? require('../../../assets/images/piggy-bank.png') : require('../../../assets/images/maestro.png')
      // const img = IncomeExpenseCategory.filter(categoty => categoty.id === selectedId)[0].img
      const img = selectedItem.img
      const finalAmount = selectedItem.heading === 'Income' ? amount : (amount * -1)

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      heading: text,
      amount: finalAmount,
      backgroundColor: selectedItem.backgroundColor,
      img: img,
      category: selectedItem
    }
    addTransaction(newTransaction)
    navigation.pop()
  }

return (
  <SafeAreaView style={styles.container}>
    <View style={styles.horizontalPaddingView}>
      <Spacer height={20}/>
      <Text style={values.h2Style}>Name</Text>
      <Spacer height={10}/>
      <CustomInput placeholder='Enter text' onChangeText={(newText) => setText(newText)} defaultValue={text}/>
      <Spacer height={20}/>
      <Text style={values.h2Style}>Amount</Text>
      <Spacer height={10}/>
      <CustomInput placeholder='Enter amount' onChangeText={(newText) => setAmount(newText)} defaultValue={amount}/>
      <Spacer height={20}/>
      <View>
        <Text style={values.h2Style}>Categories</Text>
        <Spacer height={10}/>
        <FlatList
          horizontal
          data={IncomeExpenseCategory} 
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Category category={item} selectedId={selectedItem.id} onPress={() => setSelectedItem(item)} />}
        />
      </View>
      <Spacer height={20}/>
      <View>
        <CustomButton 
        width= '100%' 
        height={50} 
        radius={15} 
        textSize={24} 
        text='Add'
        backgroundColor={colors.orage}
          onPress={onSubmit}
        />
       </View>
    </View>
  </SafeAreaView>
)
}

export default AddTransaction
