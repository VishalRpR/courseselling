import express from "express"
import {prisma} from "../db.js"
const courseRouter = express.Router()

  
courseRouter.get('/', async (req, res) => {

    const course = await prisma.course.create({
        data: { 
            title : 'Alice', 
            description: 'alice@prisma.io' , 
            price:100, 
            imageUrl : "random.jpeg" ,
        sellerId: 1}
      })
      console.log(course)
    

    res.json({
        message:"hi there ",
        data:course
    })



})

export default courseRouter;