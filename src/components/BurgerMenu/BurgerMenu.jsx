import Burger from "components/Burger/Burger"
import Menu from "components/Menu/Menu"
import { useState } from "react";

export const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <Burger open={open} setOpen={setOpen}/>
        <Menu  open={open} setOpen={setOpen}/>
        </>
    )
}