// Define the Pizza product
var Pizza = {  
    description: 'Plain Generic Pizza'
};

// And the basic PizzaStore
var PizzaStore = {  
    createPizza: function(type) {
        if (type == 'cheese') {
            return fromPrototype(Pizza, {
                description: 'Cheesy, Generic Pizza'
            });
        } else if (type == 'veggie') {
            return fromPrototype(Pizza, {
                description: 'Veggie, Generic Pizza'
            });
        }
    }
};