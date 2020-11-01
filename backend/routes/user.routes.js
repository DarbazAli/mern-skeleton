import express from 'express'
import userCtrl from '../controllers/user.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

// Create & Read
router.route('/api/users').get(userCtrl.list).post(userCtrl.create)

// CRUD BY ID
router
  .route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

// create id param for :userId
router.param('userId', userCtrl.userByID)

export default router
