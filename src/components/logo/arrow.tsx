import react from 'react'
import {Link} from 'react-router-dom'

import image from '../../assets/Black_Right_Arrow.png'
import {styled} from '@material-ui/core'
import { transform } from 'typescript'

const StyledImg = styled('img')({
    maxWidth: "200px",
    marginTop: "5vh",
    marginBottom: "5vh",
    
    "@media (max-width: 1000px)":{
        margin:"140px",
        maxWidth: "40vw",
        transform: "rotate(90deg)"
    },
    "@media (max-width: 720px)":{
        maxWidth: "40vw",
        transform: "rotate(90deg)"
    },

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