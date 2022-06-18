import express from 'express'

const router = express.Router()

/**
 * Fetch users.
 * @method: GET
 */
router.get('/', (req, res) => {
  const users = [
    { email: 'leon@re.com', name: 'Leon' },
    { email: 'ada@re.com', name: 'Ada' },
    { email: 'chris@re.com', name: 'Chris' },
  ]

  res.send(users)
})


export default router