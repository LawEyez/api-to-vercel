import app from '../server'
import bookRoutes from '../routes/books'

app.use('/books', bookRoutes)

export default app