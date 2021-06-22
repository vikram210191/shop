let items = JSON.parse(localStorage.getItem('itemsJson'));
console.log(items);

let billAmmount = JSON.parse(localStorage.getItem('ammount'));
console.log(billAmmount);


document.querySelector('.billValue').innerHTML= billAmmount;



document.getElementById('iName-0').innerHTML = items[0][0];
document.getElementById('iValue-00').innerHTML = items[0][1];
document.getElementById('iName-1').innerHTML = items[1][0];
document.getElementById('iValue-01').innerHTML = items[1][1];
document.getElementById('iName-2').innerHTML = items[2][0];
document.getElementById('iValue-02').innerHTML = items[2][1];
document.getElementById('iName-3').innerHTML = items[3][0];
document.getElementById('iValue-03').innerHTML = items[3][1];
document.getElementById('iName-4').innerHTML = items[4][0];
document.getElementById('iValue-04').innerHTML = items[4][1];





