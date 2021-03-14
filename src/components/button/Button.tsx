import React from 'react'
import {Button, styled} from '@material-ui/core'

const StyledButton = styled(Button)({

    maxWidth:"60%",
    margin: "10px"

})

interface INTFCustomButton{
    children: string;
    onClick?: () => void;
}

const CustomButton : React.FC <INTFCustomButton>= ({children, onClick}) =>{

    return(
        <StyledButton type="button" variant="contained" onClick={onClick}>
            {children}
        </StyledButton>
    )

}

export default CustomButton;