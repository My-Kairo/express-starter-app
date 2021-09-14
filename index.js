const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')
const pizzaPerfect = require('./factory');

const app = express();
const perfectPizza = pizzaPerfect();
// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

let quantity = 0;
let price = 0;
// let cart = 0;

app.get('/', function(req, res) {
	res.render('index', {
		
	});
});

app.get('/buyL', function(req, res){
	res.render('/pizzas')
})
app.post('/buyL', function(req, res) {
	res.redirect('pizzas')
});

app.get('/pizzas', function(req, res){
	quantity
	res.render('pizzas')
})
app.post('/cart', function(req, res){
	res.render('order')
})

app.post('/buyM', function(req, res) {
	res.redirect('pizzas')
});

app.post('/buyS', function(req, res) {
	res.redirect('pizzas')
});

app.post('/orderList', function(req, res){
	res.render('index',
	paid,
	due)
})
// app.post('/buyL', function(req, res){
// 	console.log(req.body);

// 	perfectPizza.buyingPrice({
// 		small: req.body.small,
// 		medium: req.body.medium,
// 		large: req.body.large
// 	})
// 	console.log(perfectPizza.getBuyingPrice());
// 	res.redirect('pizzas');
// })

// app.get('/', function(res, req){
// 	price++
// 	res.redirect('index')
// });
// app.get('/buyL', function(req,res){
// 	if(small === 'small' && small === '31.99'){
// 	}else if(small === 'medium' && small == '76.99'){
// 	}else if(small === 'medium' && small === '98.99'){
// 	}
// 	res.render('index',
// 	small,
// 	 perfectPizza.pizzaPrice());
// })
// app.post('/buyL', function(req, res){
// 	if(price === '31.99'){
// 		price++
// 	}else if(price === '76.99'){
// 		price++
// 	}else if(price === '98.99'){
// 		price++
// 	}
// 	res.render('index')
// });

// app.get('/order', function(req, res){
// 	res.render('order')
// })

// app.post('/order', function(req, res){
// 	res.render('order')
// })

// app.get('/pizzas', function(req, res){
// 	res.render('pizzas')
// })



// start  the server and start listening for HTTP request on the PORT number specified...
let PORT = process.env.PORT || 2020;
app.listen(PORT, function() {
	console.log('App started on port', PORT);
});