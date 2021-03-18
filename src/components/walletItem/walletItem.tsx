import React from 'react'

import MoneySymbol from "./moneySymbol"
import VerticalItensContainer from '../containers/verticalItensContainer'
import BorderValueShow from '../bordedValueShow/bordedValueShow'

import {styled} from "@material-ui/core"
import BordedValueShow from '../bordedValueShow/bordedValueShow'

interface INTFWalletItem{
    name: String;
    symbol: String;
    value?: number;
}

const StyledMoneyName = styled("h2")({
    fontSize: "35px",
    margin: 0,
    padding: 0
})


const WalletItem : React.FC <INTFWalletItem> = ({name, symbol, value}) => {

    return(
        <VerticalItensContainer>
            <MoneySymbol symbol={symbol}/>
            <StyledMoneyName>{name}</StyledMoneyName>
            <BordedValueShow symbol={symbol}>{value}</BordedValueShow>
        </VerticalItensContainer>
    )


}


export default WalletItem;