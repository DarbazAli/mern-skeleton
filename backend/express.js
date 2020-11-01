import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'

// initilize app
const app = express()

/* ----------------------------------------------------------
    USING MIDDLEWARES
------------------------------------------------------------- */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(helmet())
app.use(cors())

/* ----------------------------------------------------------
    ROUTING
------------------------------------------------------------- */
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

// export main express app
export default app
