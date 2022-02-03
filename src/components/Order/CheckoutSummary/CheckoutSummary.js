import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
           <h5>----</h5>
            <div style={{width: '100%', margin: 'auto'}}> 
            
                <Burger ingredients={props.ingredients}/>
                <h1>We hope it tastes well!</h1>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
                <h3>After Continue Enter Details Below --</h3>
        </div>
    );
}

export default checkoutSummary;