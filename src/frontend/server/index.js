const express = require('express')
const app = express();
const request = require('request');

app.use('/', express.static(__dirname.replace('server','public')));

const host = 'admin:admin@localhost:8080';


app.get('/api/projects',(req,res)=>{
  request('http://'+host+'/api/json',(error,response,data)=>{
    res.json({ projects: JSON.parse(data).jobs });
  });
});

app.get('/builds/latest',(req,res)=>{
  request('http://'+host+'/job/jenkins/job/master/2/wfapi/describe',(error,response,data)=>{
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
