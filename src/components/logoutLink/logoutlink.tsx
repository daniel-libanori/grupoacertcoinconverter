import React from 'react'

import {styled} from '@material-ui/core'

import TextAction from '../textLink/textAction'
import { BorderBottom } from '@material-ui/icons'

const StyledLogoutLink = styled("div")({
    
    position: "fixed",
    left: 0,
    bottom: 80,
    width: "100%",
    textAlign: "center",
    fontSize:20,
    textDecoration: "underline",

    cursor: "pointer",
})

interface INTFLogoutLink {
    children: JSX.Element | string | JSX.Element[]
    action: () => void;
}

const LogoutLink : React.FC <INTFLogoutLink>= ({action, children}) => {


    return(
        <StyledLogoutLink>
            <TextAction action={action}>
                {". " + children + " ."}
            </TextAction>
        </StyledLogoutLink>
    )
}

export default LogoutLink;