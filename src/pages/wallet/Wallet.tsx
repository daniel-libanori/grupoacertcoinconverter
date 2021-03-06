import React, { useContext } from 'react'

import HorizontalItensContainer from '../../components/containers/horizontalItensContainer'
import WalletItem from '../../components/walletItem/walletItem'

import {MoneyContext} from '../../contexts/moneyContext'

const Wallet : React.FC = () => {

    const moneyContext = useContext(MoneyContext);

    const items = [
        {name: "Real", symbol: "R$", value: moneyContext?.walletStored?.real},
        {name: "Brita", symbol: "$", value: moneyContext?.walletStored?.brita},
        {name: "Bitcoin", symbol: "₿", value: moneyContext?.walletStored?.bitcoin}
    ]

    return (
    <>
        <HorizontalItensContainer>    
                {items.map((item,index) => {
                    return(<WalletItem name={item.name} symbol={item.symbol} key={index} value={item.value} toFixedCases={item.name === "Bitcoin" ? 8 : 2}/>)
                })}   
        </HorizontalItensContainer>
        
    </>)
    
}

export default Wallet