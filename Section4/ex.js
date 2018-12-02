//hay ta
//sao thang cha no co thuoc tinh click ma thang con khong co ta
//la ghe
//minh cu tuong la thanh nien nao ke thua thi no co het moi thuoc tinh chu

function HtmlElement(){
    this.click=function(){
        console.log('Clicked');
    };
}
HtmlElement.prototype.focus=function(){
    console.log('focused');
}
const h=new HtmlElement();

function extend(Child, Parent){
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
} 
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
extend(HtmlSelectElement, HtmlElement);

const S=new HtmlSelectElement();




