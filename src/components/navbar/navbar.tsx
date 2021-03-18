import React, {useState} from 'react';

import {Redirect} from 'react-router-dom'
import {styled} from '@material-ui/core'


interface INTFtabsAndLinks{
    tab: string;
    link: string
}

interface INTFNavBar{
    tabsAndLinks: INTFtabsAndLinks[]
}

const StyledItemNavBar = styled("button")({
  all: "unset",
  borderBottomStyle: "solid",
  borderWidth:"2px",

  fontSize: "18px",

  margin: "3px 15px",
  padding: "0px 10px",

  "&:hover":{
    color: "red"
  }
 
})

const StyledSelectedItemNavBar = styled("button")({
  all: "unset",
  borderBottomStyle: "solid",
  borderWidth:"2px",
  color:"red",
  fontSize: "18px",
  textAlign: "center",

  margin: "3px 15px",
  padding: "0px 10px",

  "&:hover":{
    color: "red"
  }
 
})

const StyledAdjustNavBar = styled("div")({
  display: "flex",
  justifyContent:"center",
  marginBottom: "50px"
})

const NavBar : React.FC <INTFNavBar>= ({tabsAndLinks}) => {

  const [value,setValue] = useState(-1);

  const onClickHandler = (index : any) =>{
    setValue(index);
  }

  return (
    <>
      <StyledAdjustNavBar>

        {tabsAndLinks.map(({tab,link},index)=>{
          return (window.location.pathname == link ?
            <StyledSelectedItemNavBar onClick={() => {onClickHandler(index)}} key={index}>{tab}</StyledSelectedItemNavBar> :
            <StyledItemNavBar onClick={() => {onClickHandler(index)}} key={index}>{tab}</StyledItemNavBar>)})}

      </StyledAdjustNavBar>

      {value !==-1 ? <Redirect to={tabsAndLinks[value].link}/> : null}
    </>      
 
   
  );
}

export default NavBar;