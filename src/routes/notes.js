const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes/add', (req, res)=>{
    res.render('notes/newnote');
    
});
router.post('/notes/newnote',  (req, res)=>{
   const {title, description} = req.body;
   const errors = [];
   
   if (!title){
       errors.push({text: 'insterta un titulo!'});
       
   }
    if (!description){
       errors.push({text: 'insterta una description!'});
       
   }
   if (errors.length > 0){
       
       res.render('notes/newnote', {
           errors,
           title,
           description
    });
       
   } else {
    const newNote = new Note({title, description});
    console.log(newNote);
    res.send('ok');
   }
    
});

router.get('/notes', (req, res)=>{
    res.send('Notes from database');
});



module.exports = router;