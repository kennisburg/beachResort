import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import {Link} from 'react-router-dom';

import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
  return (
    <>
    <Hero>
      <Banner title='Luxurious Rooms' subtitle='Deluxe Rooms Starting at $499'>
        <Link to='/rooms' className='btn-primary'>
          Our Rooms
        </Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
    </>
  )
}
