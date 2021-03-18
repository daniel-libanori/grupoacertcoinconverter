import React from 'react'
import {styled} from '@material-ui/core'

const StyledMoneySymbol = styled("h3")({
    fontSize: "150px",
    color: "#78DB84",
    margin: 0,
    padding: 0,
    display: "inline-block",
    lineHeight:"150px"
})

interface INTFMoneySymbol {
    symbol: string | String;
}

const MoneySymbol : React.FC <INTFMoneySymbol>= ({symbol}) => {

    return(
        <>
        {!!symbol ?
            <StyledMoneySymbol>
                {symbol}
            </StyledMoneySymbol>:<div style={{width:150, height:150}}/>
        }
        </>
    )


}


export default MoneySymbol;