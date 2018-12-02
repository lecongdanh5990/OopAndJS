function Vehicles(){
}
Vehicles.prototype.Run=function(){
    return 'The >>> is running with speed' +this.Speed;
}

function Car(Speed){
    this.Speed=Speed;
}
//ke thua trong JS 
//chi cho thang car biet cha cua no bay gio la V chu khong phai la Carbase nhu turoc nua

//khi ta thay doi cha cua no thi ta cung nen thay doi ham contructor cua no luon
//neu khong thay doi thi khi ta new 1 thang con moi thi no se ra thang cha chu no 
//khong co ra thang con dau
Car.prototype=Object.create(Vehicles.prototype);
Car.prototype.constructor=Car;
function Bike(Speed){
    this.Speed=Speed;
}

const V=new Vehicles();
const B=new Bike(150);
const C=new Car(120);


//gia su co 2 thanh nien car va bike co chugn ham run voi cac chuc nang giong het nhau
//ta da dinh nghia ham run cua car roi, nen bay gio ta khong muon dinh nghia lai ham run cua bike nua
//giai phap la ta dinh nghia 1 thang cha chung cua 2 thang do
//sau do ta cho 2 thang do ke thua tu thagn cha chung kia


