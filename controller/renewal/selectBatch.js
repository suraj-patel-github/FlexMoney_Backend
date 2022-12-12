const pool = require('../../config/db')

const selectBatch = async (req, res) => {
  try {
    const batchNumber = req.body.batchNumber

    const userId = req.user

    const query = `update users set batch = $1 where id = $2`

    const user = await pool.query(query, [batchNumber, userId])

    return res.status(200).json({ message: 'Successfully updated batch' })
  } catch (err) {
    return res.status(500).json({ message: ' Server Error' })
  }
}

module.exports = selectBatch
