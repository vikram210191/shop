let a1 = localStorage.getItem('itemsJson');

let items = JSON.parse(a1);
console.log(items);
let newArr;
for(var i=0; i<items.length;i++){

    if (i=0) {
        items[i] = newArr;
        document.getElementsByClassName('iName-0').innerHTML= newArr[0];
        document.getElementsByClassName('iValue-0').innerHTML= newArr[1];
    }
    else if (i=1) {
        items[i] = newArr;
        document.getElementsByClassName('iName-1').innerHTML= newArr[0];
        document.getElementsByClassName('iValue-1').innerHTML= newArr[1];
    }
    else if (i=2) {
        items[i] = newArr;
        document.getElementsByClassName('iName-2').innerHTML= newArr[0];
        document.getElementsByClassName('iValue-2').innerHTML= newArr[1];
    }
    else if (i=3) {
        items[i] = newArr;
        document.getElementsByClassName('iName-3').innerHTML= newArr[0];
        document.getElementsByClassName('iValue-3').innerHTML= newArr[1];
    }
    else{
        items[i] = newArr;
        document.getElementsByClassName('iName-4').innerHTML= newArr[0];
        document.getElementsByClassName('iValue-4').innerHTML= newArr[1];
    }
}
