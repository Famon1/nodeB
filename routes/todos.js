const { Router } = require('express');
const path = require('path');
const usermongo = require('../modules/usermongo');

const router = Router();

router.get('/', function(req, res){
  res.render('index', {title: 'Гид в кармане'});
})

router.get('/login', function(req, res){
  res.render('login', {title: 'Вход для модератора',
                       boostrap_on:true,
                       script_panel:true,
                     });
})

router.get('/test', function(req, res){
  res.render('test', {title: 'Проверка'
                     });
})

router.get('/moderatorDB/:login/:pass', function (req, res){
  //res.send(`${req.params.login} ${req.params.pass}`);
  usermongo.select();
  res.send(true);
})


module.exports = router;
