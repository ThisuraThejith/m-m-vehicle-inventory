var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(8082, function(error) {
	if(!error){
		console.log("Backend Running");
	}
});

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'inventory'
});

connection.connect();

//Inserting a new vehicle part to the system
app.post("/api/inventory", function(req, res){

    var name=req.body.name;
    var description=req.body.description;
    var category=req.body.category;
    var code=req.body.code;


    connection.query("INSERT INTO `Product` (name,description,category,code) VALUES ('" + name + "','" + description + "','" + category+  "','" + code+  "')", function(err, result){
        if(err){
            console.log(err);
            throw err;
        }
        console.log("1 record inserted");
    });

    res.send(name);
    res.send(description);
    res.send(category);
    res.send(code);
});

//Inserting a new vehicle part intake to the system
app.post("/api/inventory/intake", function(req, res){

    var date=req.body.intake_date;
    var code=req.body.code;
    var purchasePrice=req.body.purchaseunitprice;
    var sellingPrice=req.body.sellingunitprice;
    var amount = req.body.amount;


    connection.query("INSERT INTO `Intake` (date,code,PurchaseUnitPrice,SellingUnitPrice,Amount) VALUES ('" + date + "','" + code + "','" + purchasePrice+  "','" + sellingPrice+  "','" + amount+  "')", function(err, result){
        if(err){
            console.log(err);
            throw err;
        }
        console.log("1 record inserted");
    });

    res.send(date);
    res.send(code);
    res.send(purchasePrice);
    res.send(sellingPrice);
    res.send(amount);
});

//Fetching all the vehicle parts in the system
app.get("/api/inventory", function(req, res){
    connection.query('SELECT * FROM inventory.Product;', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});