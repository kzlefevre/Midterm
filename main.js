//factory of dummy accounts, maybe 4-5 people
    //login ==opens model with sign in info
// make them find each other on google map (add marker on map) or at least how far away they are from each other [Bob is 4 miles away] list 
//add SoundCloud link
//add Eventful API for concerts search favorite band
//


angular.module('JamSession', ['ngRoute']);

// In order to use ngRoute as our router, we have to define what routes it should be looking for
angular.module('JamSession')
  .config(Router);

Router.$inject = ['$routeProvider']; // Inject component from ngRoute

function Router ($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl   : '/index.html', // URL on your server that leads to an html file to be used for this page
      controller    : 'jamTime', // String name of the angular controller you would like to use on this page
      controllerAs  : 'jCtrl'  // Object name for `this` in your html from the specified controller 
    })
    .when('/index', {
      templateUrl   : '/index.html',
      controller    : 'index',
      controllerAs  : 'index'
    })
    .when('/about', {
      templateUrl   : '/about.html',
    })
  
}


angular.module('JamSession')
  .controller('creamAndSugar', cNs)

function cNs () {
  var cCtrl = this;
  
  cCtrl.greeting = "Welcome to Bonanza Coffee";
  
}

angular.module('CoffeeShop')
  .controller('menu', menuCtrl);


function menuCtrl () {
  var menu = this;
  
  menu.coffees = [
    {
      name : "French Roast",
      cost : 5
    },
    {
      name : "Chai Tea",
      cost : 8
    },
    {
      name : "Non-fat soy vanilla tofu latte with gluten-free coffee and fair trade, imitation, dolphin-safe kombucha.  Served in our 200% post-consumer recylced material cup",
      cost : 18
    }
  ]
  
}
