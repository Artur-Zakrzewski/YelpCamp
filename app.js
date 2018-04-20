var express = require('express');
var app = express();
var body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm1.staticflickr.com/552/19907026675_fc068975a2_n.jpg"},
    {name: "Granite Hills", image: "https://farm1.staticflickr.com/552/19907026675_fc068975a2_n.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm1.staticflickr.com/552/19907026675_fc068975a2_n.jpg"}

    //https://farm5.staticflickr.com/4459/37529463572_24f4f9366c_n.jpg
]


app.get("/", function(request, response) {
    response.render("landing");
});

app.get("/campgrounds", function(request, response){
    response.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(request, response){
    var name = request.body.name;
    var image = request.body.image;
    var new_campground = {name: name, image: image};
    campgrounds.push(new_campground);
    response.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(request, response){
    response.render("new.ejs");
})

app.listen(3000, function(){
    console.log ('The YelpCamp Server has started...');
});