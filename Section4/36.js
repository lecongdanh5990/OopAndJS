//ta co the viet lai ham cua thang cha cho phu hop voi tung thang con
//ta chi co the viet lai ham nay sau khi da extend tu thang cha thoi
//khi ta co 2 thanh nien giong nhau o ca cha va con thi JS 
//se tu dong tim va sau do chay cua tahng con 
function Vehicles(cost){
    this.cost=cost;
}
Vehicles.prototype.Oil=function(){
    return 'The >>> is running with speed' +this.cost;
}
function extend(Child, Parent){
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
}
function Car(Speed,cost){
    Vehicles.call(this,cost);
    this.Speed=Speed;
}
extend(Car, Vehicles);
Car.prototype.Oil=function(){
    return 'The car is running by expensive oil';
}
const C=new Car(120,45);

function Bike(Name,cost){
    Vehicles.call(this,cost);
    this.Name=Name;
}
extend(Bike,Vehicles);
Bike.prototype.Oil=function(){
    return 'The Bike is no need oil to run';
}
const B=new Bike('Martin 107',999);




