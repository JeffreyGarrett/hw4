const express = require("express");
const app = express();
var faker = require('faker');

var name = faker.name.findName();
var address = faker.address.streetAddress();
var city = faker.address.city();
var state = faker.address.stateAbbr();
var zip = faker.address.zipCode();
var phoneNumber = faker.phone.phoneNumber();
var email = faker.internet.email();


app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var port = process.env.PORT || "127.0.0.1";
var ip = process.env.IP || 8080

//routes
app.get("/", function (req, res) {
    res.render("index.html");
});
app.get("/culture", function (req, res) {
    res.render("culture.html");
});
app.get("/automation", function (req, res) {
    res.render("automation.html");
});
app.get("/monitoring", function (req, res) {
    res.render("monitoring.html");
});

app.get("/contact", function (req, res) {
    res.render("contact.ejs", 
    { "name": name, "address": address, "city": city, "state": state, "zip": zip, "phoneNumber": phoneNumber, "email": email });
});


//Starting server
app.listen(port, ip, function () {
    console.log("Running Express Server...")
});
