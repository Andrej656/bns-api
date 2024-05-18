const mongoose = require('mongoose');

const bnsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  owner: { type: String, required: true },
  zoneFileHash: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('BNS', bnsSchema);
