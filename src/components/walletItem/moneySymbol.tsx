import React from 'react'
import {styled} from '@material-ui/core'
import { BorderStyle } from '@material-ui/icons'

const StyledMoneySymbol = styled("h3")({
    fontSize: "150px",
    color: "#78DB84",
    margin: 0,
    padding: 0,
    display: "inline-block",
    lineHeight:"150px"
})

interface INTFMoneySymbol {
    symbol: String;
}

const MoneySymbol : React.FC <INTFMoneySymbol>= ({symbol}) => {

    return(
        <StyledMoneySymbol>
            {symbol}
        </StyledMoneySymbol>
    )


}


export default MoneySymbol;