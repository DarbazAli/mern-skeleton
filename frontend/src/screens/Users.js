import React, { useState, useEffect } from 'react'
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { list } from '../user/api.user'
const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const abortControlle = new AbortController()
    const signal = abortControlle.signal

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setUsers(data)
      }
    })
    return function cleanup() {
      abortControlle.abort()
    }
  }, [])
  return (
    <main>
      <Container>
        <div className='jumbotron'>
          <h1 className='display-3'>All Users</h1>

          {users.length === 0 ? (
            <h4>No user found!</h4>
          ) : (
            <ListGroup variant='flush'>
              {users.map((user) => (
                <Link to={`/user/${user._id}`} key={user._id}>
                  <ListGroupItem>{user.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          )}
        </div>
      </Container>
    </main>
  )
}

export default Users
