/*let listan = document.createElement('ul');
listan.style.listStyle = 'none';
listan.style.margin = '0';
listan.style.padding = '0';
document.body.appendChild(listan);
var colors = ['rgb(55,55,255)', 'yellow', 'orange', 'brown', 'black'];

for (let i = 0; i < 5; i++) {
let li = document.createElement('li');
li.style.backgroundColor = colors[i];
li.innerText = `rad ${i+1}`;
li.style.textAlign = 'center';
li.style.fontSize = `${(i + 1)*15}px`;
li.style.marginTop = `${(i + 1)*6}px`;
li.style.color = 'white';
listan.appendChild (li);
}

let box = document.createElement('div');
document.body.appendChild(box);
box.style.border = 'solid black 2px';


for (let i = 0; i < 3; i++) {
    let list = document.createElement('ul');
    list.style.margin; '2px';
    box.appendChild(list);
    for (let i = 0; i < 10; i++) {
    let liel = document.createElement('li');
    liel.innerText = i;
    list.appendChild(liel);

        
    }
} */

//Condition och Arreys

//1-2
let arr = ['äpple','tomat','banan','annanas','druvor','päron','citron'];
console.log(arr);

//3-4
for (let i = 0; i <arr.length; i++){
console.log(arr[i]);
}

for (let i = 0; i <arr.length; i++){ 
    let h1 = document.createElement('h1');
    h1.innerText = arr[i];
    //5
    if(arr[i] == 'tomat'){
        h1.style.backgroundColor = 'red';
    }
    if(arr[i] == 'banan'){
        h1.style.backgroundColor = 'yellow';
    }
    document.body.appendChild(h1);
}

//6
let arrey = [0,10,20,30,40,50,60,70,80,90,100];

for (let i = 0; i <arrey.length; i++){
    console.log(arrey[i]);
    }
//7-8
for (let i = 0; i <arrey.length; i++){ 
let h2 = document.createElement('h2');
h2.innerText = arrey[i];
h2.style.backgroundColor = 'hsl(40,50%,50%)'
if(arrey[i] < 50){
    h2.style.backgroundColor = 'hsl(40,40%,20%)'
    h2.style.color = 'white';
}
if(arr[i] > 50){
    h2.style.backgroundColor = 'hsl(40,30%,0%)'

}

document.body.appendChild(h2);
}

//9
let arre = ['rod','vitt','svart','bla','rosa','ljusbla','gron','gul','brun'];


for (let i = 0; i <arre.length; i++) {
let paragraf = document.createElement('p');
paragraf.innerText = arre[i];
if (i % 2 === 0) {
paragraf.style.border = 'red solid 2px';
}
else {
paragraf.style.fontSize = '20px';
}

document.body.appendChild(paragraf);

}

//10

let substan = ['Adam', 'Eva','Hon','Han','Honom','Sirna','Otiva','Pia','Ulf','De'];
let verb = ['springa','ga','hoppa','rita','skriver','sportar','ata','skrattar','knyter','tittar'];
let adjekt = ['katt','hund','farg','runt','lost','viol','ehe','ripm','rob','ren'];

for (let i = 0; i <arre.length; i++) {