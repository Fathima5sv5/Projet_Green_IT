// backend/models/User.js
const mongoose = require('mongoose')
const bcrypt   = require('bcrypt')

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: false },
  lastName:  { type: String, required: false },
  email:     { type: String, required: true, unique: true, lowercase: true },
  password:  { type: String, required: true },
}, { timestamps: true })

// Hash password before saving
userSchema.pre('save', async function() {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// Compare cleartext vs hash
userSchema.methods.comparePassword = function(plain) {
  return bcrypt.compare(plain, this.password)
}

module.exports = mongoose.model('User', userSchema)
