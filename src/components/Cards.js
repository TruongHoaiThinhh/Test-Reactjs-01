import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../assets/images/img-9.jpg'
import img2 from '../assets/images/img-2.jpg'
import img3 from '../assets/images/img-3.jpg'
import img4 from '../assets/images/img-4.jpg'
import img5 from '../assets/images/img-8.jpg'



function Cards() {
  return (
    <div className='cards'>
      <h1 className='heading'>Check out these <span>EPIC</span> Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <li className='cards__item'>
                <Link className='cards__item__link' to='/services'>
                <figure className='cards__item__pic-wrap' data-category='Adventure'>
                    <img
                    className='cards__item__img'
                    alt='Travel Image'
                    src={img1}
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Explore the hidden waterfall deep inside the Amazon Jungle</h5>
                </div>
                </Link>
            </li>

            <CardItem
              src= {img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            
          </ul>

          <ul className='cards__items'>
            <CardItem
              src= {img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src= {img4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src= {img5}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

