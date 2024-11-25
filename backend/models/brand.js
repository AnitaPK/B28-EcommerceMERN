const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    description: { type: String },
    updatedAt: { type: Date, default: Date.now }
},
{
    strictPopulate: false
});

module.exports = mongoose.model('EcommerceBrand', BrandSchema);