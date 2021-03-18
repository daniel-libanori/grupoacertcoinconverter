import React, { useEffect, useState } from 'react'

import HorizontalItensContainer from '../../components/containers/horizontalItensContainer'
import VerticalItensContainer from '../../components/containers/verticalItensContainer'
import Selector from '../../components/selector/selector'
import MoneySymbol from '../../components/walletItem/moneySymbol'
import TextInput from '../../components/textInput/textInput'
import CustomButton from '../../components/button/Button'

import Arrow from '../../components/logo/arrow'

import {convertDolarToReal,convertRealToDolar,convertBitCoinToReal,convertBitCoinToRealToDolar,convertDolarToRealToBitCoin,convertRealToBitCoin} from '../../utils/conversion'

const Transactions : React.FC = () => {

    const [firstSelector,setFirstSelector] = useState<string>("");
    const [secondSelector,setSecondSelector] = useState<string>("");

    const [sellValue, setSellValue] = useState<number>(0)
    const [buyValue, setBuyValue] = useState<number>(0)

    const relatedSymbol = [{value: "Real", symbol: "R$"},{value: "Brita", symbol: "$"},{value: "Bitcoin", symbol: "₿"}]
    let updateBuyValue = true;

    const findRealatedSymbol = (value : string) =>{
        const finded = relatedSymbol.find((elem)=>elem.value === value)?.symbol
        if(!!finded) return finded
        else return ""
    }


    useEffect(()=>{
        
    const convert = async (func : any) =>{
        const res = await func(sellValue)
        

        await setBuyValue(res)
        await console.log(res)
        updateBuyValue = !updateBuyValue;

    }
    
    
    if(!!firstSelector && !!secondSelector && firstSelector !== secondSelector && sellValue){
        let funcArg;
        if(firstSelector === "Real" && secondSelector==="Brita") funcArg = convertRealToDolar;
        else if(firstSelector === "Real" && secondSelector==="Bitcoin") funcArg = convertRealToBitCoin;
        else if(firstSelector === "Brita" && secondSelector==="Real") funcArg = convertDolarToReal;
        else if(firstSelector === "Brita" && secondSelector==="Bitcoin") funcArg = convertDolarToRealToBitCoin;
        else if(firstSelector === "Bitcoin" && secondSelector==="Real") funcArg = convertBitCoinToReal;
        else if(firstSelector === "Bitcoin" && secondSelector==="Brita") funcArg = convertBitCoinToRealToDolar;
        convert(funcArg);
    }


    },[firstSelector,secondSelector, sellValue])

    return(
        <form>
            <HorizontalItensContainer>
                <VerticalItensContainer>
                    <MoneySymbol symbol={findRealatedSymbol(firstSelector)}/>
                    <Selector action={setFirstSelector} inputLabel="Moeda a vender" menuItemsValue={["Real" ,"Brita","Bitcoin"]}/>
                    
                        <TextInput 
                            label="Valor a vender"
                            name="toSellValue"
                            margin="none"
                            width="340px"
                            onChange={setSellValue}
                        />
                    
                    
                </VerticalItensContainer>
                
                <Arrow/>

                <VerticalItensContainer>
                    <MoneySymbol symbol={findRealatedSymbol(secondSelector)}/>
                    <Selector action={setSecondSelector} inputLabel="Moeda a comprar" menuItemsValue={["Real" ,"Brita","Bitcoin"]}/>
                    <TextInput 
                            label="Valor a comprar"
                            name="toBuyValue"
                            margin="none"
                            width="340px"
                            defaultValue={buyValue.toString()}
                            disabledTextField={true}
                            forceUpdate={updateBuyValue}
                    />
                </VerticalItensContainer>

            </HorizontalItensContainer>
            <div style={{marginTop: 50,display:"flex",justifyContent: "center"}}>
                <CustomButton type="submit">Converter</CustomButton>
            </div>
            
        </form>
    );

}

export default Transactions;