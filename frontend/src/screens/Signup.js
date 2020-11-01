import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { create } from '../user/api.user.js'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: '',
  })

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
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, error: '', open: true })
        // window.location('/users')
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

              <Form.Group controlId='formBasicEmail'>
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
                {values.error && values.error}
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
        </Row>
      </Container>
    </main>
  )
}

export default Signup
