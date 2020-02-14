const { Router } = require('express');
const path = require('path');

const router = Router();


router.get('/', function(req, res){
  res.render('index', {title: 'Гид в кармане'});
})

router.get('/login', function(req, res){
  res.render('login', {title: 'Вход для модератора',
                       script_panel:true,
                     });
})

module.exports = router;
