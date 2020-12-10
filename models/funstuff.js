const mongoose = require('mongoose');

const funSchema = new mongoose.Schema({
    words: { type: String, required: true }
})

module.exports = mongoose.model('Fun', funSchema);