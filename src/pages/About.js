import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
       <Box sx={{
        my: 15,
        textAlign: "center",
        p:2,
        "& h4" :{
          fontWeight: "bold",
          my: 2,
        },
        "& p" :{
          textAlign:"justify",
          
        },
        "@media (max-width:600px)":{
           mt:0,
        },
       }}>
          <Typography variant='h4'>
            Welcome To My Restaurant.
          </Typography>
          <p>
          My Restaurant group has created an unmatched experience by maintaining the highest standard of quality, hygiene, service and customer satisfaction.Today over three-decade-old brand My Restaurant, is one of the largest Indian restaurant group with over 150+ restaurants. It has become synonymous with professionalism, expertise, teamwork, consumer orientation, and finesse. Stringent quality control and strict adherence to critical parameters have made My Restaurant - a Brand to be relied on. Today, the growing My Restaurant family is an ever-growing bond-of-trust.
          Some of our specialities -
          We serve the best food in town.
          100% authentic Indian taste.
          Fine Dine - in service.
          Our Passion is to deliver the best food.
          </p>
          <br/>
          <p>
          We are often asked about our secret to success.But ask any of our regulars and they will let you in on our open secret being authentic to our roots, not compromising on quality and keeping our customers first.My strong commitment to customer satisfaction and building a foundation of trust has also become an intrinsic part of our brands culture.Being invested in customer satisfaction is ingrained at the very core of our brand. This percolates down from our founders, and is a guiding principle for everyone who works with us. We always strive to create an experience which is pleasant, memorable and respectful of our customers, treating them in a way that we would like to be treated ourselves. One of the ways we do this is by using Grade A ingredients in all our preparations, even if it means going the extra mile to source them, and incurring a higher cost. But the results have been well worth it as for us at Dosa Hut, our customers delight is our highest reward.
          </p>
       </Box>
    </Layout>
  )
}

export default About
