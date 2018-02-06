var express = require('express');
var app = express();


app.set('view engine', 'ejs');


app.get("/", function(request, response) {
    response.render("landing");
});

app.get("/campgrounds", function(request, response){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm1.staticflickr.com/552/19907026675_fc068975a2_n.jpg"},
        {name: "Granite Hills", image: "https://farm1.staticflickr.com/552/19907026675_fc068975a2_n.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm1.staticflickr.com/552/19907026675_fc068975a2_n.jpg"}
    ]
    response.render("campgrounds", {campgrounds: campgrounds});
})


app.listen(3000, function(){
    console.log ('The YelpCamp Server has started...');
});