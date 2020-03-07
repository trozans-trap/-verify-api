const express = require('express');
const router = express.Router();
const User = require('../models/user');

// router.get('/certi',(req,res)=>{
//     res.send('hello');
// });

router.get('/certi', (req,res)=>{
    var certino = req.body.certino;

    User.findOne({ certino : certino })
    .then(user=>{
          if(user) {
            res.send(`User exist with certiNo.  ${certino}  \n Student name:-${user.name} \n MailId:-${user.email}`);
          } else {
               res.send('No Such CertiNo Exist : Try Again');
              }
            })
});

module.exports = router;