// backend/controllers/authController.js
const jwt  = require('jsonwebtoken')
const User = require('../models/User')

// POST /api/auth/register
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const user = await User.create({ firstName, lastName, email, password })
    // générer un token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.status(201).json({ token })
  } catch (err) {
    console.error(err)
    if (err.code === 11000) return res.status(400).json({ message: 'Email déjà utilisé' })
    res.status(500).json({ message: 'Erreur serveur' })
  }
}

// POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Identifiants invalides' })
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.json({ token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Erreur serveur' })
  }
}
