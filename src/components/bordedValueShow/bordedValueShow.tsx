import React from 'react'
import {styled} from "@material-ui/core"


const StyledBorderValueShow = styled('div')({
    width:"250px",
    height:"50px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "46px",

    borderStyle: "solid",
    borderRadius: "20px",

    fontSize: "27px",

    marginBottom: "40px"
    
})

interface INTFBordedValueShow {
    symbol: String
    children?: number;
}

const BordedValueShow : React.FC <INTFBordedValueShow>= ({symbol, children}) => {

    return(
        <StyledBorderValueShow>
            {symbol + " " + children}
        </StyledBorderValueShow>
        )

}

export default BordedValueShow;