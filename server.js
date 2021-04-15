const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/static'));

app.get('/',function(req,res){
    res.sendFile('home.html', { root: 'html'});
});

app.get('/jeffpr11',function(req,res){
    res.sendFile('jeffpr11.html', { root: 'html'});
});

app.get('/vicfar97',function(req,res){
    res.sendFile('vicfar97.html', { root: 'html'});
});

app.get('/off',function(req,res){
    res.sendFile('off.html', { root: 'html'});
});

app.listen(process.env.PORT || 8080);
