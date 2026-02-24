const express = require('express')
const router = express.Router()

router.post('/submit-form', async (req, res) => {
  try {
    const formData = req.body
    console.log('Received form data:', formData)

    // TODO: Google Sheets integration goes here (Step 5)

    res.status(200).json({ message: 'Form received successfully!' })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Something went wrong.' })
  }
})

module.exports = router