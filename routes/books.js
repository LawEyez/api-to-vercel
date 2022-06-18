import express from 'express'

const router = express.Router()

/**
 * Fetch books
 * @method: GET
 */
router.get('/', (req, res) => {
  const books = [
    { title: 'Book One', author: 'Leon' },
    { title: 'Book Two', author: 'Ada' },
    { title: 'Book Three', author: 'Chris' },
  ]

  res.send(books)
})


export default router