import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { create } from '../user/api.user.js'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    error: '',
  })

  const [show, setShow] = useState(false)

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }
  const handleSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    }

    create(user).then((data) => {
      if (data.error) {
        console.log(data)
        setValues({ ...values, error: data.error })
      } else {
        console.log(data)
        setValues({ ...values, error: '' })
        setShow(true)
      }
    })
  }
  return (
    <main>
      <Container>
        <Row className='justify-content-md-center'>
          <Col sm={4}>
            <Form>
              <h2>Signup</h2>

              <Form.Group controlId='formBasicName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={values.name}
                  onChange={handleChange('name')}
                  type='text'
                  placeholder='User name'
                />
              </Form.Group>

              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={values.email}
                  onChange={handleChange('email')}
                  type='email'
                  placeholder='Enter email'
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={values.password}
                  onChange={handleChange('password')}
                  type='password'
                  placeholder='Password'
                />
              </Form.Group>
              <Button
                block
                variant='primary'
                type='submit'
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Col>

          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>Signin</Modal.Title>
            </Modal.Header>
            <Modal.Body>Signin</Modal.Body>
            <Modal.Footer>
              <Link to='/signin'>
                <Button variant='primary'>Signin</Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
    </main>
  )
}

export default Signup
