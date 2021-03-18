import React from 'react'

import image from '../../assets/Black_Right_Arrow.png'
import {styled} from '@material-ui/core'

const StyledImg = styled('img')({
    maxWidth: "200px",
    marginTop: "2vh",
    marginBottom: "2vh",
    
    "@media (max-width: 1000px)":{
        margin:"15vw",
        maxWidth: "40vw",
        transform: "rotate(90deg)"
    },

    "@media only screen and (hover: none) and (pointer: coarse)and (max-width: 1000px)":{
        margin: 20
    }

})

const StyledImgDiv = styled('div')({
    display: 'flex',
    flexDirection:"column",
    alignItems: "center",
    
    "@media (max-width: 720px)":{
        margin: 50
    },
    
})

const Arrow : React.FC = () => {
    return(
        <StyledImgDiv>
            <StyledImg src={image} alt="arrow"/>
        </StyledImgDiv>
    )
}

export default Arrow;