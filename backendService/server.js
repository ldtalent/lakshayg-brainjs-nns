var express = require('express')
var app = express();
const Train = require("./models/Train");
const db = require('./mongoConnect.js')
const brain = require('brain.js')
const cors = require('cors')
const net = new brain.NeuralNetwork()

//add mongoURI in mongoConnect.js
db()
app.use(cors());
app.get('/', async(req,res)=>{
  res.send('Ping-Pong')
})

//route to predict the result
app.get('/predict/:r/:g/:b', async(req,res)=> {
  var red = req.params.r;
  var green = req.params.g;
  var blue = req.params.b;
  res.json({'result':net.run([red,green,blue])[0], 'r':parseFloat(red),'g':parseFloat(green),'b':parseFloat(blue)})

})

//route to train the dataset
app.get('/train', async(req,res) => {

  // var tg = new Train({
  //   input:[0,0,0],output:[1]
  // })
  // var ty = new Train({
  //   input:[1,1,1], output:[0]
  // })
  // await tg.save()
  // await ty.save()
 var t = await Train.find({}).select('-_id -__v')

 net.train(t)
 
 res.json({'success':'true'});
 
})


//route to predict the result
app.get('/result/:r/:g/:b', async(req,res)=>{
 try{
  var r = req.params.r;
  var g = req.params.g;
  var b = req.params.b;
  res.json({'result':net.run([r,g,b])[0]})
}catch(err){
  console.log('Error')
}
})

//route to add white as the output to the db for some given input values
app.get('/white/:r/:g/:b',async(req,res) => {
  var r = req.params.r;
  var g = req.params.g;
  var b = req.params.b;
if((r>=0 && r<=1) && (g>=0 && g<=1) && (b>=0 && b<=1)){

var t = new Train({
  input:[r,g,b], output:[1]
})
await t.save();
res.json({
  r:Math.random(),g:Math.random(),b:Math.random(), result:net.run([r,g,b])[0]
})
}else{
res.json({'success':'failed'})
}
})


//route to add blacks as the output to the db for some given input values
try{
app.get('/black/:r/:g/:b', async(req,res)=> {
  var r = req.params.r;
  var g = req.params.g;
  var b = req.params.b;
if((r>=0 && r<=1) && (g>=0 && g<=1) && (b>=0 && b<=1)){

var t = new Train({
  input:[r,g,b], output:[0]
})
await t.save();
res.json({
  r:Math.random(),g:Math.random(),b:Math.random(), result:net.run([r,g,b])[0]
})
}else{
res.json({'success':'failed'})
}

})}catch(err){
  
}
app.listen(process.env.PORT || 4000, function(){
  console.log('Started')
})