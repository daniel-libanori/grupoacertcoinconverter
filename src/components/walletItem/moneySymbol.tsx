import React from 'react'
import {styled} from '@material-ui/core'

const StyledMoneySymbol = styled("h3")({
    fontSize: "150px",
    color: "#78DB84",
    margin: 0,
    
    padding: 1,
    display: "inline-block",
    lineHeight:"150px"
})

const StyledEmptyDiv = styled("div")({
    width:150, 
    height:150,
    "@media (max-width: 1000px)":{
        width:0, 
        height:0,
    },
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
            </StyledMoneySymbol>
            :
            <StyledEmptyDiv/>
        }
        </>
    )


}


export default MoneySymbol;