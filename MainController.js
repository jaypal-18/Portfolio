app.controller("MainController", function($scope){

$scope.name = "Your Name";

$scope.role = "Full Stack Developer";

$scope.skills = [

{icon:"devicon-html5-plain", name:"HTML"},
{icon:"devicon-css3-plain", name:"CSS"},
{icon:"devicon-javascript-plain", name:"JavaScript"},
{icon:"devicon-react-original", name:"React"},
{icon:"devicon-angularjs-plain", name:"AngularJS"},
{icon:"devicon-python-plain", name:"Python"},
{icon:"devicon-c-plain", name:"C"},
{icon:"devicon-amazonwebservices-original", name:"AWS"}

];

});