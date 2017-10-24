const mongoose = require('mongoose');
const config = require('../config/database');

const FlowCellSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String
    }
});