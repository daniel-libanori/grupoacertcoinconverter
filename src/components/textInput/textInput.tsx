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
    defaultValue?: string;
    disabledTextField?: boolean;
    onChange?: any;
    forceUpdate?: boolean;
}
 

const CustomTextField : React.FC <INTFCustomTextField>= ({label,name,type,margin,width,defaultValue,disabledTextField,onChange,forceUpdate}) => {
    
    const [forcingUpdate, setForcingUpdate] = useState(forceUpdate)
    
    const hadleChange = (event : any)=>{
        onChange(event?.target.value as number)
    }

    useEffect(()=>{
        setForcingUpdate(!forceUpdate)
    },[forceUpdate])

    return(
        <StyledCustomTextField
            label={label}
            name={name}
            type={type}
            style={{width: width}}
            defaultValue={defaultValue}
            disabled={disabledTextField}
            onChange={hadleChange}
        />

    )

}



export default CustomTextField;