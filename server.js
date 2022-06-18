import express from 'express'

const app = express()
const port = process.env.PORT || 5000

// JSON middleware.
app.use(express.json())


/**
 * Home page
 * @method: GET
 */
app.get('/', (req, res) => {
  res.send('Hello Universe')
})

// Start server.
app.listen(port, () => console.log('Server running on port ' + port + '...'))

export default app