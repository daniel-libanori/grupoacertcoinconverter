import React, { useEffect, useState } from 'react'

import HorizontalItensContainer from '../../components/containers/horizontalItensContainer'
import VerticalItensContainer from '../../components/containers/verticalItensContainer'
import Selector from '../../components/selector/selector'
import MoneySymbol from '../../components/walletItem/moneySymbol'

import image from '../../assets/Black_Right_Arrow.png'

const Transactions : React.FC = () => {

    const [firstSelector,setFirstSelector] = useState<string>("");
    const [secondSelector,setSecondSelector] = useState<string>("");

    const relatedSymbol = [{value: "Real", symbol: "R$"},{value: "Brita", symbol: "$"},{value: "Bitcoin", symbol: "₿"}]
    const findRealatedSymbol = (value : string) =>{
        const finded = relatedSymbol.find((elem)=>elem.value === value)?.symbol
        if(!!finded) return finded
        else return ""
    }


    useEffect(()=>{
        
    },[firstSelector,secondSelector])

    return(
        <>
            <HorizontalItensContainer>
                <VerticalItensContainer>
                    <MoneySymbol symbol={findRealatedSymbol(firstSelector)}/>
                    <Selector action={setFirstSelector} inputLabel="Moeda a vender" menuItemsValue={["Real" ,"Brita","Bitcoin"]}/>
                </VerticalItensContainer>
                
                <img src={image} style={{maxWidth: 250}}/>

                <VerticalItensContainer>
                    <MoneySymbol symbol={findRealatedSymbol(secondSelector)}/>
                    <Selector action={setSecondSelector} inputLabel="Moeda a comprar" menuItemsValue={["Real" ,"Brita","Bitcoin"]}/>
                </VerticalItensContainer>

            </HorizontalItensContainer>
            <button>Converter</button>
        </>
    );

}

export default Transactions;