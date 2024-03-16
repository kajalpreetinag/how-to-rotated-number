const input = require("readline-sync");
let n = input.questionInt("Enter the Array Size: ")
let p = input.questionInt("Rotaded time : ")



let array=[];
let i = 0;

while(n>i){
    let a = input.questionInt("enter the numberr: ")
    array[i]=a;
    i++

       }
 i=0;
 while(n>1){
    rotated=i+p-1;
    while(rotated>=n){
        rotated=rotated-n;
    }console.log((array[rotated]));
    i=rotated;
    while(rotated<n-1){
        array[rotated]=array[rotated+1];
        rotated++

    }
    n--
 }
 console.log(array[0]);