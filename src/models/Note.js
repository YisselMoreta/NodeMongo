const mongoose = require ('mongoose');
const  Schema  = mongoose.Schema;

const NoteSchema = new mongoose.Schema({
    title: { 
    type: String,
    required: true
    
    },
    description: {
    type: String,
    required: true
    },
    date: {
    type: Date,
    default: Date.now
    }
});

const model = mongoose.model('Note', NoteSchema );
module.exports = model;
