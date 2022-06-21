import React from "react";
import classes from './Header.module.css';
import meals from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
    /* in the App component in the Headr we pass the onShownCart props which refers to the showCartHandler
    and here we forwarding it further to the HeaderCartButton component where we will call it */
return (<React.Fragment>
    <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={meals} alt = "A table with food"/>
    </div>
</React.Fragment>);   
}

export default Header;