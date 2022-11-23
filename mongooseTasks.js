var mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema= mongoose.Schema({ name: String})

schema.methods.sidekick= function(){
console.log(this.get("name") + " let out a cheerful whistle")
}

var Ulti= mongoose.model('Ulti', schema)

var spell= new Ulti({ name: 'Mirana'})
spell.save(function(err) {
spell.sidekick()
})




