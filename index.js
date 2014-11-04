var express=require('express')
var app= express()


app.use(express.static(__dirname+'/public'));

app.get('/api/book',function(req,res){
	var books = [
		{title: 'DotA Trick 1', price: 200},
		{title: 'DotA Update', price: 300},
		{title: 'DotA Pro', price: 400}
	];
	res.send(books);
})

var server=app.listen(3000,function(){
	console.log("server is running")
})