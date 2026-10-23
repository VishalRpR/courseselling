import express from 'express'

const app=express()

const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {


    req.body

}
)

userRouter.post('/signin', (req, res) => {


    req.body

}
)

userRouter.post('/course/purchase', (req, res) => {



})

userRouter.get('/purchases', (req, res) => {



})

export default userRouter;