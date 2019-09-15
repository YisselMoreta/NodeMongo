const mongoose = require ('mongoose');
const  Schema  = mongoose.Schema;

const NoteSchema = new Schema({
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

const esquema = mongoose.model('Nota', NoteSchema );
module.exports = NoteSchema;
