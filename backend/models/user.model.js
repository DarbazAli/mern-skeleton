import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
  // name filed
  name: {
    type: String,
    trim: true,
    required: 'Name is required',
  },

  // email field
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required',
  },

  // passwords
  hashed_password: {
    type: String,
    required: 'Password is required',
  },
  salt: String,

  // timestamps
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
})

/*------------------------------------------
Handling the password string as a virtual field
The password string that's provided by the user
is not stored directly in the user document.
Instead, it's handled as a virtual field
-------------------------------------------*/
UserSchema.virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })

/*------------------------------------------------------------------
Password field validation

To add validation constraints to the actual password string that's
selected by teh end user, we need to add custom validation logic and
associate it with the hashed_password field in the Schema
------------------------------------------------------------------*/
UserSchema.path('hashed_password').validate(function () {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.')
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required')
  }
}, null)

/*------------------------------------------------------------------
Encryption and Authentication

The Encryption logic and salt generation logic, which are used to
generate the hashed_password and salt values representing the password
values, are defined as userShema methods
------------------------------------------------------------------*/
UserSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },
  encryptPassword: function (password) {
    if (!password) return ''
    try {
      return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
    } catch (err) {
      return ''
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + ''
  },
}

export default mongoose.model('User', UserSchema)
