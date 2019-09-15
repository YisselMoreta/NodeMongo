const express = require('express');
const router = express.Router();

const Nota = require('../models/Note');

router.get('/notes/add', (req, res)=>{
    res.render('notes/new-note');
    
});
router.post('/notes/new-note', async  (req, res)=>{
   const {title, description} = req.body;
   const errors = [];
   
   if (!title){
       errors.push({text: 'Insterta un título!'});
       
   }
    if (!description){
       errors.push({text: 'Insterta una descripción!'});
       
   }
   if (errors.length > 0){
       
       res.render('notes/new-note', {
           errors,
           title,
           description
    });        
   } else {
       
    const newNote = new Note({title, description});
    await newNote.save();
    res.redirect('/notes');
   }
    
});

router.get('/notes', (req, res)=>{
    res.send('Notes from database');
});



module.exports = router;