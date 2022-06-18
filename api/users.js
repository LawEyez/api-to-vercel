import app from '../server'
import userRoutes from '../routes/users'

app.use('/users', userRoutes)

export default app