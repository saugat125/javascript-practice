function linearSearch(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}

let arraylist = [1,2,3,4,5];
let targetElement = 3;
console.log(linearSearch(arraylist,targetElement));

