import React from 'react'
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import Banner from "../images/thali.jpg";
import "../styles/HomeStyles.css"
const Home = () => {
  return (
    <Layout>
      
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className='homeContainer'>
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
          <button className='btn'>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
