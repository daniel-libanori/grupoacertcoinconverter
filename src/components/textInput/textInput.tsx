import React from 'react'

/* Material UI */
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core';

const StyledCustomTextField = styled(TextField)({
    width: "45%"

})


interface INTFCustomTextField{
    label: string;
    name: string;
    margin: string;
}
 

const CustomTextField : React.FC <INTFCustomTextField>= () => {
    return(
        <StyledCustomTextField
            label="Insira aqui seu e-mail..."
            name="email"
            margin="none"
        
        />

    )

}



export default CustomTextField;