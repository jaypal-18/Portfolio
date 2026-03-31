app.controller("projectController", function($scope, projectService){

$scope.projects = projectService.getProjects();

});