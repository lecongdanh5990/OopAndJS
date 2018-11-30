//Factory to create OB
function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log('This is a Circle');
        }
    }
}

const circle=createCircle(1);
circle.draw();

//Constructor function:
//de khoi tao qua cach nay thi chu cai dau tien trong ten ham phai duoc viet hoa

function Car(Speed){
    this.Speed=Speed,
    this.Run=function(){
        console.log("The car is running");
    }
}
//kahi ta dung tu khoa new thi co 3 chueyn xay ra nhu sayu
//ta se tao ra duoc 1 empty OB
//sau do ta se setup duoc tu khoa this tro den chinh onject do
//va cuoi cung no se tra ve 1 object thong qua ham khoi tao nen ta khong can xai tu khoa return this
const myCar=new Car(250);


//value type va ONJECTS type
let number=10;
function increase(number){
    number++;
}
increase(number);
console.log(number);
//OBJECTS thiu no se khac nha
let obj={value: 10};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);

//ta co the them bot, hay xoa di cac thuoc tinh trong OBject o ngoai cung duoc
//dieu nay lam cho JS mah=nh me va de su dung hon
//doi voi cac ngon ngu khac khi ta muon them hay bot nhu vay thi ta phaui 
//quay lai clas hgoc va sua lai no

//ta co the dung ngoac vuong de truy cap den PRO trongf OB
//cai nay dung trong cac trupong PRO co cacten dac biet, hay ki tu dac biet, hay khoang trong 
//va viet hoa
function Bike(Speed){
    this.Speed=Speed,
    this.Run=function(){
        console.log("The car is running");
    }
}

const myBike=new Bike(250);
myBike.cost=100000;
//ta co the dung ngoac vuong de truy cap den PRO trongf OB
//cai nay dung trong cac trupong PRO co cacten dac biet, hay ki tu dac biet, hay khoang trong 
//va viet hoa

myBike.add={pro:"BINH DINH",
            Town:"PHU MY"}
const newPro="Buyer name";
myBike[newPro]="NGUYEN THI THUY TRAM";
//ta co the dung tu khoe delete de xoa cac thanh nien khong can thiet di 
//ta co dung dau cham hoac vuong deu ok het 
//delete myBike[newPro];

//loop trong OB lay ca key lan value tu object
for(let key in myBike){
    console.log(key,myBike[key]);
}

//ta chi lay ra nhung thanh nien la data trong OB
for(let key in myBike){
    if(typeof myBike[key]!=='function')
        console.log(key,myBike[key]);
}

//ham nay dung de lay toan bo cac key ma OB co ne 
const keysOfMyBike=Object.keys(myBike);
console.log(keysOfMyBike);

//ta co the kiem tra xem 1 thuoc tinh bat ki co nam trong OB cua chung ta khong
if('add' in myBike) console.log('mybike has add.');
else console.log("My bike don't have add");

//truu tuong trong JS
function House(){
    this.color="red";
    let Length=100;
    let High=200;
    let calculate=function(electric){

    }

    //thanh nien nay la con cua house nen ta co the su dung bat cu ham va thuco tinh nao cua cha no
    //nhung thuoc tinh let thi ta ci the lay vinh thuong
    //nhung thuoc tinh this thi ta dung tu khao this vi this la lien quan toi OB
    //nhung thuoc tinh la this thi lien quan toi OB nen no ton tai lau dai
    //con nhung thuoc tinh la let thi ta coi nhu la no o ben trong ham
    //va noi bo cua ham do nen ta khong the goi no tu ben ngoai
    //ban chat cua truu tuong la vay
    this.test=function(){
        //length;
        calculate(10);
        console.log("I am living in my house");
    }
}
//truu tuong la giau may thanh nien ma ta khong can theit di
//chi cho show ra nhung thanh nien nao ma ta can dung thoi
//do la tinh chat co ban va hay nhat cua truu tuong torng OOP
//gia su ta co 1 ham trong OB 
//khi ta su ham do trong OB, nhung ta lai cho no ben ngoai 
//va ben nogai vco rat rat nhieu ham nhung vay torng PROJECTS cua ta
//hau qua la ta phai sua rat rat nhieu ham ben ngaoi 
//nen ta han che cho ra ngoai 
//chi cho ra nhung thanh nien nao thuc su van theit
//va khi ta co sua thi chi sua lai nhung thanh nien nay trong ham thoi
const myHouse=new House();
//de lam duoc dieu nay, hay noi cach khac la che giau nhugn thanh nien nay di 
//tthi ta dung tu khoa let trong 


//truu tuong trong JS
//mto nhu cau dat ra doi voi cac tahnh nien private la con the doc
//gia tri tu benn ngoai
//doi khi ta can den no 
//gio phai lam sao?????????????
function Home(){
    this.color="red";
    let Length=100;
    let High=200;
    let calculate=function(electric){

    }
    this.getlength=function(){
        return Length;
    }

    //giai phap la day
    Object.defineProperty(this,'Length',{
        get:function(){
            return Length;
        },
        set:function(value){
            //ta co the kiem tra gia tri cho no khi 
            //dau vao cung duoc
            //con chuyen co cho no coi hay dua vao la chuyen cua ta
            if(value<0) throw new Error("Length must be larger than 0");
            Length=value;
        }
    });
}

const myHome=new Home();
//khi ta goi toi length thi thanh nien function ben canh get se duoc goi
myHome.Length=100;

