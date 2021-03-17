import React from 'react'
import fireBaseConfig from '../../firebase/firebase'

import VerticalItensContainer from '../../components/containers/verticalItensContainer'
import HorizontalItensContainer from '../../components/containers/horizontalItensContainer'
import WalletItem from '../../components/walletItem/walletItem'

const Wallet : React.FC = () => {

    const items = [
        {name: "Real", symbol: "R$"},
        {name: "Brita", symbol: "$"},
        {name: "Bitcoin", symbol: "₿"}
    ]

    return (
    <>
        <h1>Wallet</h1>
        <HorizontalItensContainer>    
                {items.map((item,index) => {
                    return(<WalletItem name={item.name} symbol={item.symbol} key={index}/>)
                })}   
        </HorizontalItensContainer>
        <button onClick={()=>fireBaseConfig.auth().signOut()}>Delogar</button>
    </>)
    
}

export default Wallet