import React, {createContext, useState, useEffect, useContext} from 'react'
import {AuthContext} from './authContext'

export interface INTFExtractStored{
    typeSelledCoin: string;
    typeBoughtCoin: string;
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
    setExtractStored: React.Dispatch<React.SetStateAction<INTFExtractStored[]>>
}

export const MoneyContext = createContext<Partial<INTFMoneyProvider>>({});

export const MoneyProvider : React.FC = ({ children }) => {

  const {user} = useContext(AuthContext);

  const [walletStored, setWalletStored] = useState({brita: 0, real:100000,bitcoin:0});
  const [extractStored, setExtractStored] = useState([{
    typeSelledCoin: "-",
    typeBoughtCoin: "Real",
    amountSelledCoin: 0,
    amountBoughtCoin: 100000,
    transactionDate: "-"
}]);


  useEffect(() => {
    if(!user?.email) return;

    const userWalletOnLocalStorage = localStorage.getItem("walletOf:" + user?.email)

    if(userWalletOnLocalStorage){
      setWalletStored(JSON.parse(userWalletOnLocalStorage));
    }
    else{
      localStorage.setItem(("walletOf:" + user?.email),JSON.stringify(walletStored))
    }

    const userExtractOnLocalStorage = localStorage.getItem("extractOf:" + user?.email)

    if(userExtractOnLocalStorage){
      setExtractStored(JSON.parse(userExtractOnLocalStorage));
    }
    else{
      localStorage.setItem(("extractOf:" + user?.email),JSON.stringify(extractStored))
    }


  }, [user?.email]);
    
  
  
  useEffect(()=>{
    if(user?.email) localStorage.setItem(("walletOf:" + user?.email),JSON.stringify(walletStored))
  },[walletStored])

  useEffect(()=>{
    if(user?.email) localStorage.setItem(("extractOf:" + user?.email),JSON.stringify(extractStored))
  },[extractStored])
  



  
  return (
    <MoneyContext.Provider value={{ walletStored , setWalletStored, extractStored, setExtractStored}}>{children}</MoneyContext.Provider>
  );
};