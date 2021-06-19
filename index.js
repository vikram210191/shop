
let billArray = [];
var bill = 0;
function addPrice(a){
    console.log(billArray.push(a));

}

function genBill(){
    
for(i=0;i<billArray.length;i++){
    bill = bill + billArray[i];
}
billArray=[];
document.querySelector('.cart-total-price').innerHTML=" ₹"+ bill;
}
