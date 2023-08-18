import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'


const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfItems = ctx.items.reduce((curNumber,item) => {
    return curNumber + item.amount;
  },0)

  const btnClasses = `${classes.button} ${classes.bump}`

  return (
    <div>
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon} >
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    </div>
  )
}

export default HeaderCartButton