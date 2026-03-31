app.directive("skillCard", function(){

return{

restrict:"E",

scope:{
icon:"@",
name:"@"
},

template:

'<div class="skill-card">'+
'<i class="{{icon}} colored"></i>'+
'<p>{{name}}</p>'+
'</div>'

};

});