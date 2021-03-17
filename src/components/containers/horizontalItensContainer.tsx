import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, styled } from '@material-ui/core';

const StyledVerticalContainer = styled(Container)({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'

})

interface INTFVerticalItensContainer {
    children: JSX.Element | JSX.Element[]
    maxWidth?: false | undefined | 'lg' | 'md'| 'sm'| 'xl'| 'xs'
}


const HorizontalItensContainer : React.FC <INTFVerticalItensContainer> = ({children, maxWidth, ...others}) =>{
    
    return(
        <StyledVerticalContainer maxWidth={maxWidth} {...others}>
            {children}
        </StyledVerticalContainer>
        
    )
}

export default HorizontalItensContainer;