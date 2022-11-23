var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')
var Adaptation = require("./models/adaptation").Adaptation


var Adaptation = new Adaptation({
title:"В игре",
nick:"marci_in_game"
})  


console.log(Adaptation)
Adaptation.save(function(err, adaptation, affected){
console.log(adaptation.title)
})


  