
let billArray = [];
let bill = 0;
let item = [];
let itemName;


localStorage.clear();             // clear local storage


function addPrice(a, b){
    console.log(billArray.push(a));
    setTimeout(genBill,200);
    itemName = document.getElementsByClassName('itemBill')[b].value;          // getting item and its value
    item.push([itemName, a]);
    localStorage.setItem('itemsJson', JSON.stringify(item));
    console.log(item);
}

function genBill(){
for(i=0;i<billArray.length;i++){                          // calculating bill
    bill = bill + billArray[i];
}


billArray=[];
document.querySelector('.cart-total-price').innerHTML=" ₹"+ bill;  // generating bill
}
