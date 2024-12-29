const marbl=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//console.log(marbl.push(dc));
const all=marbl.concat(dc)
console.log(all);
//using spread
const al=[...marbl,...dc]
//console.log(al);
const arr2=[12,5,34,[5,6,7,89,[6,7,9,]],4,5,6,7]
const usable=arr2.flat(2);
//used for handle the all the sub elements of the array into single array
//console.log(usable);

//put question
console.log(Array.isArray("SUKH"));


// CONVERT ANYTHING INTO ARRAY
console.log(Array.from("sulakhan singh"));


console.log(Array.from({name:"sukh"}))
//IT WILL GIVE EMPTY ARRAY ,AS IT IS UNBLE TO DISTINGUISH WHAT TO CONVERT EVEN KEY OR VALUE

const scr1=100;
const scr2=200;
const scr3=300;
console.log(Array.of(scr1,scr2,scr3));



