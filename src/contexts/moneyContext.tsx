import React, {createContext, useState, useEffect, useContext} from 'react'
import {AuthContext} from './authContext'

interface INTFExtractStored{
    typeSelledCoin: string;
    typeBoughtCoin: string;
    priceBoughtCoin: number;
    amountSelledCoin: number;
    amountBoughtCoin: number;
    transactionDate: string;
}

interface INTFWalletStored{
  brita: number; 
  real:number; 
  bitcoin:number;
}

interface INTFMoneyProvider{
    children: React.ReactNode;
    walletStored: INTFWalletStored;
    setWalletStored: React.Dispatch<React.SetStateAction<INTFWalletStored>>;
    extractStored: INTFExtractStored[];
}

export const MoneyContext = createContext<Partial<INTFMoneyProvider>>({});

export const MoneyProvider : React.FC = ({ children }) => {

  const {user} = useContext(AuthContext);

  const [walletStored, setWalletStored] = useState({brita: 0, real:100000,bitcoin:0});
  const [extractStored, setExtractStored] = useState([]);


  useEffect(() => {
    if(!user?.email) return;

    const userWalletOnLocalStorage = localStorage.getItem("walletOf:" + user?.email)

    if(userWalletOnLocalStorage){
      setWalletStored(JSON.parse(userWalletOnLocalStorage));
    }
    else{
      localStorage.setItem(("walletOf:" + user?.email),JSON.stringify(walletStored))
    }
  }, [user?.email]);
    
  
  
  useEffect(()=>{
    if(user?.email) localStorage.setItem(("walletOf:" + user?.email),JSON.stringify(walletStored))
  },[walletStored])

  return (
    <MoneyContext.Provider value={{ walletStored , setWalletStored}}>{children}</MoneyContext.Provider>
  );
};