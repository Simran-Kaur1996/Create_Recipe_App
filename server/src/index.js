import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { userRouter } from './routes/user.js'
import { recipesRouter } from './routes/recipes.js'

const app = express()
const PORT = process.env.PORT || 3003

app.use(express.json())
app.use(cors())

app.use('/auth', userRouter)
app.use('/recipes', recipesRouter)

mongoose.connect(
  'mongodb+srv://simran31kaur:MERNpassword123@recipes.np9svu8.mongodb.net/recipes?retryWrites=true&w=majority'
)

app.listen(PORT, () => console.log('Server Started on port', PORT))
