import React from 'react'

import {Link} from 'react-router-dom'

interface INTFTextLink {
    children: JSX.Element | string | JSX.Element[]
    to: string;
}



const TextLink : React.FC <INTFTextLink>= ({children, to}) => {

    return(
        <Link to={to}>
            {children}
        </Link>

    )

}

export default TextLink;