import React from 'react'

/* Material UI */
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core';

const StyledCustomTextField = styled(TextField)({
    width: "45%"

})


interface INTFCustomTextField{
    label?: string;
    name?: string;
    margin?: string;
    type?: string;
}
 

const CustomTextField : React.FC <INTFCustomTextField>= ({label,name,type,margin}) => {
    return(
        <StyledCustomTextField
            label={label}
            name={name}
            type={type}
        />

    )

}



export default CustomTextField;