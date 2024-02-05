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

function binarySearch(array,target){
    let low = 0;
    let high = array.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(array[mid]===target){
            return mid;
        }
        else if(array[mid]<target){
            low = low + 1;
        }
        else{
            high = high - 1;
        }
    }
    return -1;
}

let binarylist = [1,2,3,4,5];
let targetelement = 1;
console.log(binarySearch(binarylist,targetelement));


