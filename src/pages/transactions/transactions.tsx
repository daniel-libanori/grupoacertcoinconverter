import React, { useEffect, useState , useCallback, useContext} from 'react'

import HorizontalItensContainer from '../../components/containers/horizontalItensContainer'
import VerticalItensContainer from '../../components/containers/verticalItensContainer'
import Selector from '../../components/selector/selector'
import MoneySymbol from '../../components/walletItem/moneySymbol'
import TextInput from '../../components/textInput/textInput'
import CustomButton from '../../components/button/Button'
import Arrow from '../../components/logo/arrow'

import TextField from '@material-ui/core/TextField';

import {MoneyContext, INTFExtractStored} from '../../contexts/moneyContext'

import {convertDolarToReal,convertRealToDolar,convertBitCoinToReal,convertBitCoinToRealToDolar,convertDolarToRealToBitCoin,convertRealToBitCoin} from '../../utils/conversion'

const Transactions : React.FC = () => {

    const {walletStored,setWalletStored,extractStored,setExtractStored} = useContext(MoneyContext);

    const [firstSelector,setFirstSelector] = useState<string>("");
    const [secondSelector,setSecondSelector] = useState<string>("");

    const [sellValue, setSellValue] = useState<number>()
    const [buyValue, setBuyValue] = useState<number | undefined>()

    const relatedSymbol = [{value: "Real", symbol: "R$"},{value: "Brita", symbol: "$"},{value: "Bitcoin", symbol: "₿"}]

    const findRealatedSymbol = (value : string) =>{
        const finded = relatedSymbol.find((elem)=>elem.value === value)?.symbol
        if(!!finded) return finded
        else return ""
    }


    useEffect(()=>{
        
    const convert = async (func : any) =>{
        const res = await func(sellValue)
        setBuyValue(res)

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


    const submitHandler = (event : any) => {
            event.preventDefault();

            const { toSellValue, toBuyValue } = event.target.elements;
            if(firstSelector === "Real"){
                if(toSellValue > Number(walletStored?.real)) return;
            }
            else if(firstSelector === "Brita"){
                if(toSellValue > Number(walletStored?.brita)) return;
            }
            else if(firstSelector === "Bitcoin"){
                if(toSellValue > Number(walletStored?.bitcoin)) return;
            }

            if(walletStored && setWalletStored && buyValue && sellValue && setExtractStored && extractStored){
                if(firstSelector === "Real" && secondSelector === "Brita"){
                    setWalletStored({real: walletStored.real  - sellValue , brita: walletStored.brita + buyValue, bitcoin: walletStored.bitcoin})
                }
                else if(firstSelector === "Brita" && secondSelector === "Real"){
                    setWalletStored({real: walletStored.real + buyValue, brita: walletStored.brita  - sellValue, bitcoin: walletStored.bitcoin})
                }
                else if(firstSelector === "Bitcoin" && secondSelector === "Brita"){
                    setWalletStored({real: walletStored.real , brita: walletStored.brita + buyValue, bitcoin: walletStored.bitcoin  - sellValue})
                }

                if(firstSelector === "Real" && secondSelector === "Bitcoin"){
                    setWalletStored({real: (walletStored.real  - sellValue) , brita: walletStored.brita, bitcoin: walletStored.bitcoin + buyValue})
                }
                else if(firstSelector === "Brita" && secondSelector === "Bitcoin"){
                    setWalletStored({real: walletStored.real , brita: walletStored.brita  - sellValue, bitcoin: walletStored.bitcoin + buyValue})
                }
                else if(firstSelector === "Bitcoin" && secondSelector === "Real"){
                    setWalletStored({real: walletStored.real + buyValue, brita: walletStored.brita, bitcoin: walletStored.bitcoin  - sellValue})
                }

                const date = new Date();
                const stringDate = (+ (date.getDate()-1) + "-" + date.getMonth()+1) + "-" + date.getFullYear(); 

                const extract : INTFExtractStored = {
                    typeSelledCoin: firstSelector,
                    typeBoughtCoin: secondSelector,
                    amountSelledCoin: sellValue,
                    amountBoughtCoin: buyValue,
                    transactionDate: stringDate
                }

                extractStored.push(extract);
                console.log(extractStored)

            }
            




        };
   

    return(
        <form onSubmit={submitHandler}>
            <HorizontalItensContainer>
                <VerticalItensContainer>
                    <MoneySymbol symbol={findRealatedSymbol(firstSelector)}/>
                    <Selector action={setFirstSelector} inputLabel="Moeda a vender" menuItemsValue={["Real" ,"Brita","Bitcoin"]}/>
                    
                        {/*<TextInput 
                            label="Valor a vender"
                            name="toSellValue"
                            margin="none"
                            width="340px"
                            onChange={setSellValue}
                        />*/}

                    <TextField
                        label="Valor a vender"
                        name="toSellValue"
                        margin="none"
                        style={{width:"340px"}}
                        value={sellValue ? sellValue.toString(): ""}
                        onChange={(event) => setSellValue(+event.target.value)}
                    />
                    
                    
                </VerticalItensContainer>
                
                <Arrow/>

                <VerticalItensContainer>
                    <MoneySymbol symbol={findRealatedSymbol(secondSelector)}/>
                    <Selector action={setSecondSelector} inputLabel="Moeda a comprar" menuItemsValue={["Real" ,"Brita","Bitcoin"]}/>
                    

                    <TextField
                        label="Valor a comprar"
                        name="toBuyValue"
                        margin="none"
                        style={{width:"340px"}}
                        value={buyValue ? buyValue.toString() : ""}
                        disabled={true}
                    />
                    {/*
                    <TextInput 
                            label="Valor a comprar"
                            name="toBuyValue"
                            margin="none"
                            width="340px"
                            value={buyValue ? buyValue.toString() : undefined}
                            disabledTextField={true}
                    />*/}
                </VerticalItensContainer>

            </HorizontalItensContainer>
            <div style={{marginTop: 50,display:"flex",justifyContent: "center"}}>
                <CustomButton type="submit">Converter</CustomButton>
            </div>
            
        </form>
    );

}

export default Transactions;