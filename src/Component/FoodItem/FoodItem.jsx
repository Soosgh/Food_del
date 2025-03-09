import React, { useContext, useState } from 'react'
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/ShowContext';


const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id]
                    ? <img src={assets.add_icon_white} className='add' onClick={() => addToCart(id)} alt='' />

                    : <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} className='remove' />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-img-rating">
                    <p className="food-item-name">{name}</p>
                    <img src={assets.rating_starts} alt='rating_stars' />
                </div>

                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>


            </div>

        </div>
    )
}

export default FoodItem