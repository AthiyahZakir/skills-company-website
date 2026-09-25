require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { google } = require('googleapis')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 5000

// ─── Middleware ───────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // set your frontend domain in .env
  methods: ['POST', 'GET'],
}))
app.use(express.json())

// File upload setup (CVs saved to /uploads folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads'
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)
    cb(null, dir)
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, unique + path.extname(file.originalname))
  }
})
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowed = ['.pdf', '.doc', '.docx']
    const ext = path.extname(file.originalname).toLowerCase()
    if (allowed.includes(ext)) cb(null, true)
    else cb(new Error('Only PDF, DOC, DOCX files are allowed'))
  }
})

// ─── Google Sheets Auth ───────────────────────────────────────
// Uses a Service Account credentials JSON file
// See SETUP.md for how to create this
const getAuthClient = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_KEY_FILE || './google-credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return auth
}

// ─── Submit Form Route ────────────────────────────────────────
app.post('/api/submit-form', upload.single('cv'), async (req, res) => {
  try {
    const data = req.body
    const cvFilename = req.file ? req.file.filename : 'No CV uploaded'

    // Timestamp
    const submittedAt = new Date().toLocaleString('en-MY', {
      timeZone: 'Asia/Kuala_Lumpur',
      dateStyle: 'short',
      timeStyle: 'short'
    })

    // Build the row to append to Google Sheets
    // Order matches the header row defined in SETUP.md
    const row = [
      submittedAt,
      data.program || '',
      data.fullName || '',
      data.ic || '',
      data.dob || '',
      data.gender || '',
      data.maritalStatus || '',
      data.race || '',
      data.raceOther || '',
      data.address || '',
      data.postcode || '',
      data.city || '',
      data.state || '',
      data.phone || '',
      data.mobile || '',
      data.email || '',
      data.guardianName || '',
      data.guardianIc || '',
      data.guardianPhone || '',
      data.guardianRelation || '',
      data.guardianAddress || '',
      data.guardianPostcode || '',
      data.guardianCity || '',
      data.guardianState || '',
      data.qualification || '',
      data.institution || '',
      data.specialization || '',
      data.startDate || '',
      data.endDate || '',
      data.disability || '',
      data.heardFrom || '',
      data.heardFromOther || '',
      data.declarationName || '',
      data.declarationDate || '',
      cvFilename,
    ]

    // Append to Google Sheet
    const auth = getAuthClient()
    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID, // set in .env
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] },
    })

    console.log(`✅ New application from: ${data.fullName} (${data.email})`)
    res.json({ success: true, message: 'Application submitted successfully.' })

  } catch (err) {
    console.error('❌ Submission error:', err.message)
    res.status(500).json({ success: false, message: 'Server error. Please try again.' })
  }
})

// ─── Health Check ─────────────────────────────────────────────
app.get('/', (req, res) => res.json({ status: 'Teja Skills API running ✅' }))

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
