var express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getFullYear', ()=>{
   return new Date().getFullYear(); 
});

hbs.registerHelper('screamIt',(str)=>{
    return str.toUpperCase();
});

hbs.registerHelper('ti',(str)=>{
    return str;
});


app.set('view engine','hbs');



/*app.get('/help', (req, res)=>{
    res.redirect('help.html');
});*/


/*
app.use((req, res, next)=>{
    let down = false;
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err,res)=>{
        if(err){
            console.log(err);
        }
    });
    
    console.log('inside 1st app.use....');
    
    if(down){
        res.render('maintenance.hbs',{message:'site is down for the maintenance, it will be up soon !!!'});
    }else{
        next();
    }
    //next();
});
*/


/*app.use((req, res, next)=>{
    console.log('inside 2nd app.use....');
    res.render('maintenance.hbs');
});*/



app.use(express.static(__dirname + '/public'));


app.get('/',(req, res)=>{
    res.render('home.hbs',{name:'andrew', likes:['pepsi', 'coke','mountain dew'], pageTitle:'Home', welcomeMessage:'welcome to home' });
    //res.send('default page');
});


app.get('/default', (req,res)=>{
       /*
        res.send({
            name:'john',
            address:'phoenix',
            movies:['jurassic park','godzilla','anaconda']
        });*/
        res.redirect('help.html');
    
});

app.get('/about', (req,res)=>{
       /*
        res.send({
            name:'john',
            address:'phoenix',
            movies:['jurassic park','godzilla','anaconda']
        });*/
        res.render('about.hbs',{pageTitle:'about page', pageTitle:'About'});
    
});

app.get('/projects', (req, res)=>{
   res.render('projects.hbs',{pageTitle:'Projects'}); 
});

app.get('/bad', (req, res)=>{
    res.send({
        type:'mismatch',
        code:304,
        errorMessage:'bad request'
    });
});

app.get('/maintenance', (req,res)=>{
       /*
        res.send({
            name:'john',
            address:'phoenix',
            movies:['jurassic park','godzilla','anaconda']
        });*/
        //res.redirect('help.html');
        res.render('maintenance.hbs',{pageTitle:'about page', pageTitle:'About'});
    
});


app.listen(process.env.PORT, process.env.IP, (err, res)=>{
    if(err){
        console.log('error starting server.js');
    }else{
        console.log('server started listening...');
    }
});