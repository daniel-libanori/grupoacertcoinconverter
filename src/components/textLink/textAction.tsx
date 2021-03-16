import React from 'react'

import {Link} from 'react-router-dom'

interface INTFTextLink {
    children: JSX.Element | string | JSX.Element[]
    action: () => void;
}



const TextLink : React.FC <INTFTextLink>= ({children, action}) => {

    return(
        <a onClick={action}>
            {children}
        </a>

    )

}

export default TextLink;