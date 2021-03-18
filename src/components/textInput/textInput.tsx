import React, { useEffect, useState } from 'react'

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
    width?: string;
    value?: string | undefined;
    disabledTextField?: boolean;
    onChange?: any;
}
 

const CustomTextField : React.FC <INTFCustomTextField>= ({label,name,type,margin,width,value,disabledTextField,onChange}) => {
    
    const [textValue, setTextValue] = useState<undefined | string>()
    
    const hadleChange = (event : any)=>{
        if(!onChange) return;
        onChange(event?.target.value as number)
    }

    useEffect(()=>{
        
        if(typeof(value)==='string'){
            setTextValue(value)
        }


        if(!value) {
            setTextValue("0")
        }
            
        console.log(value)
    },[value])

    return(
        <StyledCustomTextField
            label={label}
            name={name}
            type={type}
            style={{width: width}}
            value={textValue}
            disabled={disabledTextField}
            onChange={hadleChange}
        />

    )

}



export default CustomTextField;