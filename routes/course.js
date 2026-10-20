import express from "express"

const courseRouter = express.Router()


courseRouter.get('/', (req, res) => {

    res.json({
        message:"hi there "
    })

})

export default courseRouter;