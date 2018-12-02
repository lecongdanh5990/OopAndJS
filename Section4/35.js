//ke thua nhieu thang thi  ok nhung ta ton cong viet nhieu lenh ke thua
//ta setting lai ham construc cho noqua
//ta co gang viet lai ham de tai su dung
function Vehicles(cost){
    this.cost=cost;
}
Vehicles.prototype.Run=function(){
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
const C=new Car(120,45);

function Bike(Name,cost){
    Vehicles.call(this,cost);
    this.Name=Name;
}
extend(Bike,Vehicles);
const B=new Bike('Martin 107',999);




