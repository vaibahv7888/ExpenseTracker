import React, { createContext, useReducer } from 'react';
import HomeScreenReducer from './HomeScreenReducer';

// Initial state
const initialState = {
    transactions: []
    //     {
    //         id: 1,
    //         img: require('../../../../assets/images/mortarboard.png'),
    //         heading: 'Education',
    //         amount: 1000,
    //         backgroundColor: '#F6AFB0',
    //     },
    //     {
    //         id: 2,
    //         img: require('../../../../assets/images/burger.png'),
    //         heading: 'Food',
    //         amount: -100,
    //         backgroundColor: '#8ECC81',
    //     },
    //     {
    //         id: 3,
    //         img: require('../../../../assets/images/taxi.png'),
    //         heading: 'Transport',
    //         amount: -10,
    //         backgroundColor: '#80CEEE',
    //     }
    // ]
}

// Global Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(HomeScreenReducer, initialState);
  
    // Actions
    function deleteTransaction(id) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    }
  
    function addTransaction(transaction) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      });
    }
  
    return (<GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>);
  }