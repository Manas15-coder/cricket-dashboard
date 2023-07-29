import React from 'react'

import { Link } from 'react-router-dom'
import CountdownTimer from './CountdownTimer.js';


const Home = () => {
    const targetDate = new Date("Oct 5, 2023 15:40:25");
    return (
        <section id="banner">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='display-1'>Cricket World Cup Dashboard</h1>
                        <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2JsemNpa2c4dGZ3eW1wMTRybjFsN2JwZW1ibWJmMGtib2V4YmdrZCZlcD12MV9naWZzX3NlYXJjaCZjdD1z/WQJbiTZ9Iz17FPjJE4/giphy.gif' className='img-fluid' height="100px" ></img>
                    </div>
                  
                    <Link to="/schedule"><button className='banner-btn'> View Schedule Now</button></Link>
                      
            

                </div>

                <div>

                </div>
            </div>

        </section>
    )
}

export default Home
