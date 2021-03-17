import React, {createContext} from 'react'


interface INTFExtractStored{
    typeSelledCoin: string;
    typeBoughtCoin: string;
    priceBoughtCoin: number;
    amountSelledCoin: number;
    amountBoughtCoin: number;
    transactionDate: string;
}

interface INTFMoneyProvider{
    children: React.ReactNode;
    walletStored: {brita: number, real:number, bitcoin:number};
    extractStored: INTFExtractStored[]
}

export const MoneyContext = createContext<Partial<INTFMoneyProvider>>({});

export const MoneyProvider : React.FC = ({ children }) => {
 



  return (
    <MoneyContext.Provider value={{ }}>{children}</MoneyContext.Provider>
  );
};