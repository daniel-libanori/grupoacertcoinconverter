import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, styled } from '@material-ui/core';

const StyledVerticalContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'

})

interface INTFVerticalItensContainer {
    children: JSX.Element | JSX.Element[]
    maxWidth: false | undefined | 'lg' | 'md'| 'sm'| 'xl'| 'xs'
}


const VerticalItensContainer : React.FC <INTFVerticalItensContainer> = ({children, maxWidth}) =>{
    
    return(
        <StyledVerticalContainer maxWidth={maxWidth}>
            {children}
        </StyledVerticalContainer>
        
    )
}

export default VerticalItensContainer;