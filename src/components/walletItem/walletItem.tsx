import React from 'react'

import MoneySymbol from "./moneySymbol"
import VerticalItensContainer from '../containers/verticalItensContainer'

import {styled} from "@material-ui/core"

interface INTFWalletItem{
    name: String;
    symbol: String;
}

const StyledMoneyName = styled("h2")({
    fontSize: "35px",
    margin: 0,
    padding: 0
})


const WalletItem : React.FC <INTFWalletItem> = ({name, symbol}) => {

    return(
        <VerticalItensContainer>
            <MoneySymbol symbol={symbol}/>
            <StyledMoneyName>{name}</StyledMoneyName>

        </VerticalItensContainer>
    )


}


export default WalletItem;