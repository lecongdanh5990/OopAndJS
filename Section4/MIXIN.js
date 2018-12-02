//gia su ta co 1 OB la dong vat, sau do dong vat co nguoi va cho
//nhung sau do ta lai co them ca, ca cung la dv nhung no lai biet boi
//mot giai phap la ta co the chia dong vat thanh 2 nhom la tren can va duoi nuoc va sau do ket thua
//nhung nhu vay thi ko ok cho lam, luon kuon nho rang ta chi tien hanh da hinh khi 
//va chi khi co 1 lop duy nhat, han che ke thua tu nhieu lop

//toi uu hoa bang ham nay ne
function mixin(target,...sources){
    Object.assign(target, ...sources);
}

const canEat={
    eat:function() {
        this.food--;
        console.log('Is eatting');
    }
};

const canWalk={
    walk:function() {
        console.log('Walking');
    }
};

const canSwim={
    swim:function() {
        console.log('Swimming');
    }
};

function person(){

}
function dog(){

}
function fish(){

}

// const person=Object.assign({},canEat,canWalk);
// console.log(person);
//Object.assign(person.prototype,canEat,canWalk);
mixin(person.prototype,canEat,canWalk);
const p=new person();
console.log(p);

Object.assign(dog.prototype,canEat,canWalk,canSwim);
const d=new dog();
console.log(d);

Object.assign(fish.prototype,canEat,canSwim);
const f=new fish();
console.log(f);
