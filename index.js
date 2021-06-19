
let billArray = [];
var bill = 0;
function addPrice(a){
    console.log(billArray.push(a));
    console.log(billArray);

}

function genBill(){
    
for(i=0;i<billArray.length;i++){
    bill = bill + billArray[i];
}
console.log(bill);
document.querySelector('.cart-total-price').innerHTML= bill;
}
