import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: 'Sit aute sunt ad nisi qui id minim ea labore sunt irure quis veniam.'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Sit aute sunt ad nisi qui id minim ea labore sunt irure quis veniam.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Sit aute sunt ad nisi qui id minim ea labore sunt irure quis veniam.'
      },
      {
        icon: <FaBeer />,
        title: 'Beer on Tap',
        info: 'Sit aute sunt ad nisi qui id minim ea labore sunt irure quis veniam.'
      }
    ]
  }
  render() {
    return (
      <section className='services'>

        <Title title='services'/>
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return <article key={index} className='service'>
              <span>
                {item.icon}
              </span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>


      </section>
    )
  }
}
