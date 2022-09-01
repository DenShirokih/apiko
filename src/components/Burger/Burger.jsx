import { StyledBurger } from "./Burger.styled";
import React from 'react';



const Burger = ({open, setOpen}) => {
    return (
      <StyledBurger open={open} onClick={()=> setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }
  
  export default Burger;