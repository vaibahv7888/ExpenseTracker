import { Text, View } from 'react-native'
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import styles from '../Styles';
import colors from '../../../Constants/Colors';
import values from '../../../Constants/Values';
import Spacer from '../../../Components/Spacer';


const AddTransactions = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
  
    const onSubmit = e => {
      e.preventDefault();
        const backgroundColor = amount > 0 ? '#8ECC81' : '#FFCCCB'
        const img = amount > 0 ? require('../../../../assets/images/piggy-bank.png') : require('../../../../assets/images/maestro.png')
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        heading: text,
        amount: +amount,
        backgroundColor: backgroundColor,
        img: img
      }
      addTransaction(newTransaction)
    }
  
  return (
    <View style={styles.horizontalPaddingView}>
        <Spacer height={20}/>
        <Text style={values.h2Style}>Add new Transaction</Text>
        <Text>Name</Text>
        <CustomInput placeholder='Enter text' onChangeText={(newText) => setText(newText)} defaultValue={text}/>
        <Spacer height={20}/>
        <Text>Amount</Text>
        <CustomInput placeholder='Enter amount' onChangeText={(newText) => setAmount(newText)} defaultValue={amount}/>
        <Spacer height={20}/>
        <View style={styles.horizontalPaddingView}>
          <CustomButton 
          width= '100%' 
          height={50} 
          radius={15} 
          textSize={24} 
          text='Add transaction'
          backgroundColor={colors.orage}
            onPress={onSubmit}
          />
         </View>
    </View>
  )
}

export default AddTransactions

