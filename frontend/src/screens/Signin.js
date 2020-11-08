import React, { useState } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'

const Signin = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container>
      <h1>Signin</h1>
    </Container>
  )
}

export default Signin
