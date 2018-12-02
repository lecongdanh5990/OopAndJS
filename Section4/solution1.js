//hay ta
//sao thang cha no co thuoc tinh click ma thang con khong co ta
//la ghe
//minh cu tuong la thanh nien nao ke thua thi no co het moi thuoc tinh chu

function HtmlElement(){
    this.click=function(){
        console.log('Clicked');
    };
    this.render=function(){
    }
}
HtmlElement.prototype.focus=function(){
    console.log('focused');
}
const h=new HtmlElement();


function HtmlSelectElement(items=[]){
    this.items=items;
    this.addItem=function(num){
        this.items.push(num);
    }
    this.removeItem=function(num){
        for( var i = 0; i < this.items.length-1; i++){ 
            if ( this.items[i] === num) {
              this.items.splice(i, 1); 
            }
         }
    }
}
//ta khong the lam nhu the nay duoc, no khong ra ket qua nhu ta mong muon chu khong phai la khong lam duoc
//
//giai thich 
//Object.create(Parent.prototype) tao ra doi tuong moi voi cha la HTMLELEMT
//cha cua HTMLELEMT la BASEHTMELEMT
//cha cua no co 1 phuong thuc la focus ma ta da dinh nghia o tren va khong co phuong thuc ckick


//tuc la o day thi thang cha cua htmlselect se la tahng cha cua htmlelement
//HtmlSelectElement.prototype=Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype=new HtmlElement;
HtmlSelectElement.prototype.constructor=HtmlSelectElement;
HtmlSelectElement.prototype.render=function(){
    console.log('<select>');
    for( var i = 0; i < this.items.length-1; i++){ 
        console.log('<option>'+this.items[i] +'</option>');
     }
     console.log('</select>');
}

const S=new HtmlSelectElement();



function HtmlImageElement(src){
    this.src=src;
    Object.defineProperty(this,'src',{
        set:function(value){
            src=value;
        }
    });
}
HtmlImageElement.prototype=new HtmlElement;
HtmlImageElement.prototype.constructor=HtmlImageElement;
HtmlImageElement.prototype.render=function(){
    console.log('<img src=' +this.src +'/>');  
}
const I=new HtmlImageElement('1.jpg');



