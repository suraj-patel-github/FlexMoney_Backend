
const pool = require('../../config/db')

const getBatch = async (req, res) => {
  try {
    const batch_id = req.params.batchId

    const query = `select * from batches where id = $1`

    const batch = await pool.query(query, [batch_id])

    return res
      .status(200)
      .json({ message: 'Batch found', batch: batch.rows[0] })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = getBatch
