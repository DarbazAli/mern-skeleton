import React from 'react'
import { Container, Image } from 'react-bootstrap'
import heroImage from '../assets/images/software_image.jpg'
const Home = () => {
  return (
    <main>
      <Container>
        <div className='jumbotron'>
          <h1 className='display-3'>MERN Skeleton</h1>
          <p className='lead'>
            This is a MERN Skeleton starterkit to develop Full-Stack apps with
            React, MongoDB, Node, Express
          </p>
          <hr className='my-4' />
          <Image src={heroImage} fluid />
        </div>
      </Container>
    </main>
  )
}

export default Home
