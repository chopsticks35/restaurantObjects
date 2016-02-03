//Food Item constructor
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
    this.name = name || 'unnamed';
    this.calories = calories || 0;
    this.vegan = vegan || false;
    this.glutenFree = glutenFree || false;
    this.citrusFree = citrusFree || false;
}

var apple = new FoodItem(
    'fuji',
    25,
    true,
    true,
    true
);
console.log(apple);


var bread = new FoodItem(
    'wholeWheat',
    100,
    false,
    false,
    true
);

console.log(bread);

var orange = new FoodItem(
    'navel',
    80,
    true,
    true,
    false
);

console.log(orange);

var burrito = new FoodItem(
    'big burrito',
    500,
    false,
    false,
    true
);

var lime = new FoodItem(
    'fresh lime',
    5,
    true,
    true,
    false
);

var tequilla = new FoodItem(
    'anjeo tequilla',
    100,
    true,
    true,
    true
);

var guacamole = new FoodItem(
    'holy guacamole', 
    50, 
    false, 
    false, 
    false
);

var tortilla = new FoodItem(
    'flour tortilla', 
    300, 
    true, 
    true, 
    true
);

var beansAndRice = new FoodItem(
    'black beans and rice', 
    300, 
    false, 
    true, 
    false
);

//stringify with no side effects - or could use toString method
FoodItem.prototype.stringify = function() {
	return ("Name: " + this.name + ". Calories: " + this.calories + ". Vegan: " + this.vegan + ". Gluten Free: " + this.glutenFree + ". Citrus Free: " + this.citrusFree + ".")
}

var tea = new FoodItem(
    'tea',
    5,
    true,
    true,
    true
);

var sugar = new FoodItem(
    'sugar',
    20,
    true,
    true,
    true
);

var water = new FoodItem(
    'water',
    0,
    true,
    true,
    true
);




//drink constructor
var Drink = function(name, description, price, FoodItem){
    this.name = name;
    this.description = description;
    this.price = price;
    this.FoodItem = FoodItem;
};

var icedTea = new Drink(
    'sweet iced tea',
    'brewed sweet tea',
    2.00,
    [tea, sugar, water]
);

Drink.prototype.stringify = function(){
};

console.log(tea);

//plate constructor
var Plate = function(name, description, price, FoodItem){
    this.name = name;
    this.description = description;
    this.price = price;
    this.FoodItem = FoodItem;
}

var burritoPlate = new Plate(
    'humongous burrito plate',
    'big ass loaded burrito',
    15.00,
    [burrito, apple]
);

Plate.prototype.stringify = function(){
};

console.log(burritoPlate);

//order constructor - array of plate
var Order = function(Plate){
    this.Plate = Plate;
};

var newOrder = new Order([burritoPlate]);
console.log(newOrder);

Order.prototype.stringify = function(){
};

//menu constructor
var Menu = function(Plate){
    this.Plate = Plate;
};

var myMenu = new Menu([burritoPlate]);
    console.log(myMenu);

Menu.prototype.stringify = function(){
};

//restaurant constructor
var Restaurant = function(name, description, Menu){
    this.name=name;
    this.description=description;
    this.Menu=Menu;
};

var myRestaurant = new Restaurant(
    'Ti\'s Restaurant',
    'food that is simple and delicious',
    myMenu
);

console.log(myRestaurant);

Restaurant.prototype.stringify = function(){
};

//customer constructor
var Customer = function(dietaryPreference){
    this.dietaryPreference=dietaryPreference;
};

var newCustomer = new Customer('vegan');
console.log(newCustomer);

//stringify method - return string JSON formatted as ???

















