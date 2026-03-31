app.service("projectService", function(){

this.getProjects = function(){

return [

{
name:"Portfolio Website",
tech:"AngularJS, CSS",
github:"https://github.com/yourusername/portfolio"
},

{
name:"AWS Cloud Deployment",
tech:"EC2, S3",
github:"https://github.com/yourusername/aws-project"
},

{
name:"React Dashboard",
tech:"React, JavaScript",
github:"https://github.com/yourusername/react-dashboard"
}

];

};

});