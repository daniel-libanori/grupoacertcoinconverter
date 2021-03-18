import React from 'react'

import image from '../../assets/CoinConverterLogo.png'
import {styled} from '@material-ui/core'

const StyledImg = styled('img')({
    maxWidth: "500px",
    marginTop: "5vh",
    marginBottom: "5vh",
    
    "@media (max-width: 720px)":{
        maxWidth: "40vw"
    },

    "@media (max-width: 600px)":{
        maxWidth: "80vw"
    }
})

const StyledImgDiv = styled('div')({
    display: 'flex',
    flexDirection:"column",
    alignItems: "center",
    
})

const Logo : React.FC = () => {
    return(
        <StyledImgDiv>
            <StyledImg src={image} alt="logo"/>
        </StyledImgDiv>
    )
}

export default Logo;