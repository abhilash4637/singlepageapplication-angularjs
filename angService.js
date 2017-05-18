/**
 * Created by abhia on 2/21/2017.
 */
angular
    .module("myApp")
.service('AnupService',function () {
this.initializeData = [{
    id:"10001",
    name:"abhilash",
    dob:"01/07/1994",
    age:"23"
},
    {
        id:"10002",
        name:"ram",
        dob:"03/15/1996",
        age:"21"
    }
];

this.addEmployee = function(emp,data,callback){
data.push(emp);
callback(data);
};

this.editthis = function (index,data,callback) {

    callback(data[index]);

}
this.edit = function(object,index,data,callback){
data[index].id = object.id;
data[index].name = object.name;
data[index].dob = object.dob;
data[index].age = object.age;
callback(data);
}
});