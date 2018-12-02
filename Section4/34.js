//ta muon omoi thanh nien phuong tien deu co gia cua no
//nhung khi ta ogi binh thuong thi Car chi co ca thuoc tinh cua rieng no chu khong co thuoc tinh chung


function Vehicles(cost){
    this.cost=cost;
}
Vehicles.prototype.Run=function(){
    return 'The >>> is running with speed' +this.Speed;
}
//chi can co ham call la moi thu se dien ra ok het
function Car(Speed,cost){
    Vehicles.call(this,cost);
    this.Speed=Speed;
}

Car.prototype=Object.create(Vehicles.prototype);
Car.prototype.constructor=Car;

const V=new Vehicles();

//ta khong the lam nhu the nay la vi
//khi ta tao ra 1 car moi thi ok, moi thu dien ra binh thuiong
//nhung trong ham tao ra new bike thi ta tao ra shape 
//ma shape lai co con tro this, nen no khong tro toi cai car cua chung ta 
//ma tro toi o dau do ma ta khong biet duoc
//do do no khong co tac dung gi xay ra o day
const C=new Car(120,10000000);

Bike.prototype=Object.create(Vehicles.prototype);
Bike.prototype.constructor=Bike;
function Bike(Name){
    this.Name=Name;
}
const B=new Bike('Martin 107');



