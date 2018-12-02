function Bike(Speed){
    this.Speed=Speed;
    this.move=function(){
        console.log('MOVE');
    }
}


const car1=new Bike(250);
const car2=new Bike(300);
//ta co the them protptye member sau khi tao ra cac INstanve cung duoc
//sau do INstance van co the nhan ra cac thuoc tinh nay 
Bike.prototype.Run=function(){
    console.log("The car is running");
}
//chi hien ra cac PROPERTI cua INSTANCW
console.log(Object.keys(car1));
//hien ra ca member cua PROTOTYPE
for(let key in c1) console.log(key);

