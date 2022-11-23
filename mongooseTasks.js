var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Ulti = mongoose.model('Ulti', { name: String })

var spell = new Ulti({ name: 'Unleash'})
spell.save(function (err) {
if (err) {
console.log(err)
    } else {
console.log('Arrrr')
    }
})
