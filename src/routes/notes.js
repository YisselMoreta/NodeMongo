const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes/add', (req, res)=>{
    res.render('notes/new-note');
    
});
router.post('/notes/new-note',   (req, res)=>{
    console.log(req.body);
    
   const {title,description} = req.body;

   const errors = [];
   
   if (!title){
       errors.push({text: 'Insterta un título!'});
       
   }
    if (!description){
       errors.push({text: 'Insterta una descripción!'});
       
   }
   if (errors.length > 0){
       
       res.render('notes/add', {
           errors,
           title,
           description
           
    });       
   } else {
          
    const newNote = new Note({title, description});
    console.log('ok');
    newNote.save();
     res.redirect('/notes');
   }
    
});

router.get('/notes', (req, res)=>{
    res.send('Notes from database');
});



module.exports = router;