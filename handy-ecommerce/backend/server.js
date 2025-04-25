// backend/server.js
require('dotenv').config()
const express  = require('express')
const mongoose = require('mongoose')
const cors     = require('cors')
const path     = require('path')

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✔ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err))

// Routes Auth
app.use('/api/auth', require('./routes/auth'))

// (Ici tu peux ensuite monter /api/products, /api/orders, etc.)

// (Optionnel) Servir le front en production
const staticPath = path.join(__dirname, '../frontend/dist')
app.use(express.static(staticPath))
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'))
})

// Démarrage
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`⚡️ Server running on ${PORT}`))
