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

var tortillaChips = new FoodItem(
    'fried corn tortilla chips', 
    200, 
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

//stringify with no side effects - could use toString method???
FoodItem.prototype.stringify = function() {
	return ("Name: " + this.name + 
            ". \nCalories: " + this.calories + 
            ". \nVegan: " + this.vegan + 
            ". \nGluten Free: " + this.glutenFree + 
            ". \nCitrus Free: " + this.citrusFree + ".");
}

//drink constructor
var Drink = function(name, description, price, FoodItem){
    this.name = name || 'unnamed';
    this.description = description || 'none';
    this.price = price || 0;
    this.FoodItem = FoodItem || [];
};


Drink.prototype.stringify = function(){
    
//unsure if needed to push food item into new array???
    var returnIngredients = [];
    this.FoodItem.forEach(function(FoodItem){
        returnIngredients.push(FoodItem)
    })
    return ('Name: ' + this.name + 
            '. \nDecription: ' + this.description + 
            '. \nPrice: ' + this.price +
            '. \nIngredients: ' + returnIngredients.push(FoodItem) + ',');
//            '. \nIngredients: ' + this.FoodItem.join(', ') + '.')
           
};

var icedTea = new Drink(
    'sweet iced tea',
    'brewed sweet tea',
    2.00,
    [tea, sugar, water]
);

console.log(icedTea);

//plate constructor
var Plate = function(name, description, price, FoodItem){
    this.name = name || 'no name';
    this.description = description || 'none';
    this.price = price || 0;
    this.FoodItem = FoodItem || [];
}

Plate.prototype.stringify = function(){

//unsure if needed to push food item into new array???
   var returnIngredients = [];
    this.FoodItem.forEach(function(FoodItem){
        returnIngredients.push(FoodItem)
    })
	return ('Name: ' + this.name +
            '. \nDescription: ' + this.description + 
            '. \nPrice: ' + this.price + 
            '. \nIngredients: ' + returnIngredients + ',')
//          '. \nIngredients: ' + this.FoodItem.join(', ') + '.')
};

var burritoPlate = new Plate(
    'humongous burrito plate',
    15.00,
    [burrito, beansAndRice, guacamole]
);

console.log(burritoPlate);

//order constructor - array of plate
var Order = function(Plate) {
	this.Plates = Plate || []
}

Order.prototype.stringify = function() {
	for(Plate in Plates) {
		return Plate.prototype.stingify()
	}
}
var newOrder = new Order([burritoPlate]);
console.log(newOrder);


//menu constructor
var Menu = function(Plate){
    this.Plate = Plate || [];
};


Menu.prototype.stringify = function() {
	var returnPlates = []
	this.Plate.forEach(function(Plate) {
		returnPlates.push(Plate.stringify())
	})
	return returnPlates
}

var myMenu = new Menu([burritoPlate]);
    console.log(myMenu);

//restaurant constructor
var Restaurant = function(name, description, menu) {
	this.name = name || 'generic restaurant'
	this.description = description || 'none'
	this.menu = menu || []
}

Restaurant.prototype.stringify = function() {
	return 'Name: ' + this.name +
            '. \nDescription: ' + this.description +
            '. \nMenu: ' + this.menu.stringify()
};

var myRestaurant = new Restaurant(
    'Ti\'s Restaurant',
    'food',
    Plate
);

console.log(myRestaurant);

//customer constructor
var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference
}

Customer.prototype.stringify = function() {
	return 'Dietary preference: ' + this.dietaryPreference + '.'
};

var newCustomer = new Customer('vegan');
console.log(newCustomer);


//functions for vegan gluten free and citrus free
Plate.prototype.isVegan = function() {
	var isVegan = true
	this.FoodItem.forEach(function(FoodItem) {
		if (!FoodItem.isVegan)
			isVegan = false
	})
	return isVegan;
}

 var testPlate = burritoPlate.isVegan();
console.log(testPlate);

Plate.prototype.isGlutenFree = function() {
	var isGlutenFree = true
	this.FoodItem.forEach(function(FoodItem) {
		if (!FoodItem.isGlutenFree)
			isGlutenFree = false
	})
	return isGlutenFree;
}

var testBread = bread.isGlutenFree();
console.log();

Plate.prototype.isCitrusFree = function() {
	var isCitrusFree = true
	this.FoodItem.forEach(function(FoodItem) {
		if (!FoodItem.isCitrusFree)
			isCitrusFree = false
	})
	return isCitrusFree;
}

var marg = margarita.isCitrusFree();
console.log(marg);



//TEST Restaurant thru instatiating plates, drink, menu

var burritoPlate = new Plate(
    'Burrito Plate', 
    'Big burrito', 
    15.00, 
    [burrito, beansAndRice, guacamole]);

var guacamolePlate = new Plate(
    'Guacamole Plate', 
    'holy guac and chips', 
    6.00, 
    [guacamole, tortillaChips]);

var margarita = new Drink(
    'margarita', 
    'top shelf margarita', 
    8.00, 
    [tequilla, lime]);

var myMenu = new Menu(
    [burritoPlate, guacamolePlate, margarita, icedTea]);

var myRestaurant = new Restaurant(
    'Ti\'s Mexican Fiesta', 
    'fresh and festive', 
    myMenu);

console.log(myRestaurant.stringify());
















