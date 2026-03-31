app.config(function($routeProvider){

$routeProvider

.when("/",{
templateUrl:"app/views/home.html",
controller:"MainController"
})

.when("/about",{
templateUrl:"app/views/about.html"
})

.when("/projects",{
templateUrl:"app/views/projects.html",
controller:"projectController"
})

.when("/contact",{
templateUrl:"app/views/contact.html"
})

.otherwise({
redirectTo:"/"
});

});