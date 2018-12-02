
function Car(Speed){
    this.Speed=Speed,
    this.Run=function(){
        console.log("The car is running");
    }
}
const myCar=new Car(250);

let person={name:"danh"};
console.log(person);

let home={
    cost:"150",
    add:"Quan 9 city"
}
Object.defineProperty(home,'cost',{
    writable:false,
    enumerable:false,//Khong fcho thuoc tinh nay hien ra khi ta lap OBJE
    configurable:false
});

home.cost=10;
console.log(home.cost);
delete home.cost;
console.log(home.cost);
console.log(Object.keys(home));

//lay cha cua thanh nien nay ra
//Object.getPrototypeOf(myObj);

//them thuoc tinh cho cha chung cua cac OB
//khi ta khai bao nhieu thanh nien thuoc OB bike
//ta lang phi bo nho cho ham run 
//nen co 1 giai phai la them ham run cho cac thanh nien trong nay luon
//them vao bang cach them prototyoe luob
//hay vai
// function Bike(Speed){
//     this.Speed=Speed,
//     this.Run=function(){
//         console.log("The car is running");
//     }
// }
// const myCar=new Bike(250);
// const myCar=new Bike(300);



function Bike(Speed){
    //instance member
    this.Speed=Speed;
    this.move=function(){
        //va nguoc lai ta goi ham PROTOTYPE trong INSTANCE cung duoc ne
        this.Run();
        console.log('MOVE');
    }
}
//them thuoc tinh run cho cha cua no, va xoa cac tuhoc itnh kia
//Prototyper member

//goi ham tu INSTANCE trong PROTPRYPE MENBER cung duoc

Bike.prototype.Run=function(){
    //this.move();
    console.log("The car is running");
}
//ta cung vo the viet lai ham cua thang cha no cung duoc luon
const car1=new Bike(250);
const car2=new Bike(300);
//viet lai ham cua thang cha no
Bike.prototype.toString=function(){
    return 'The bike is running with speed' +this.Speed;
}

