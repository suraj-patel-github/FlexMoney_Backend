const pool = require('../../config/db')

const payment = async (req, res) => {
  try {
    const id = req.user

    const query = `select * from users where id = $1`

    const user = await pool.query(query, [id])

    const currMonth = new Date().getMonth() + 1

    if (currMonth == user.rows[0].last_month) {
      return res.status(401).json({ message: 'Already paid for this month' })
    } else {
      const query = `update users set last_month = $1, batch = $2 where id = $3`

      const updateUser = await pool.query(query, [currMonth, null, id])

      return res.status(200).json({ message: 'Payment Successfull' })
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = payment
