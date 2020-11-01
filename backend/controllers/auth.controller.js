/* eslint-disable no-trailing-spaces */
/* eslint-disable no-underscore-dangle */
import JWT from 'jsonwebtoken'
import expressJWT from 'express-jwt'
import User from '../models/user.model.js'
import config from '../../config/config.js'

/*------------------------------------------------------------------
SIGNIN
@desc   Signin
@url    /auth/signin
@method POST
@access public

1. find user by emal
    if user not found
        response back with error: User not foud
    
    if user's password and hashed_password don't match
        response back with error: Email and password don't match
    
    if email and password is correct:
        create a new jwt toekn, assign it to cookie with user_id
        response back with success and { token, user}
    else
        response back with error: Couldn't sign in
        
------------------------------------------------------------------*/
const signin = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email })
    if (!user) {
      return res.status(401).json({
        error: 'User not found',
      })
    } // end if

    if (!user.authenticate(password)) {
      return res.status(401).json({ error: "Email and password don't match" })
    } // end if

    const token = JWT.sign({ _id: user._id }, config.jwtSecret)
    res.cookie('t', token, { expire: new Date() + 9999 })

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (err) {
    return res.status(401).json({
      error: 'Could not sign in',
    })
  }
}

/*------------------------------------------------------------------
SIGNOUT
@desc   Signout
@url    /auth/signout
@method GET
@access private

1. clear created toekn cookie
2. responde back with 'signed out' message
------------------------------------------------------------------*/
const signout = (req, res) => {
  res.clearCookie('t')
  return res.status(200).json({
    message: 'signed out',
  })
}

/*------------------------------------------------------------------
Require Signin
------------------------------------------------------------------*/
const requireSignin = expressJWT({
  secret: config.jwtSecret,
  userProperty: 'auth',
  algorithms: ['HS256', 'HS384'],
})

/*------------------------------------------------------------------
Check Authorization status

------------------------------------------------------------------*/
const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id === req.auth._id
  if (!authorized) {
    return res.status(403).json({
      error: 'User is not authorized',
    })
  }
  return next()
}

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization,
}
