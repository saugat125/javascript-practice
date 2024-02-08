const removeDuplicate = (array) => {
    let result = [];
    for(let i=0;i<array.length;i++){
        let char = array[i];
        if(!result.includes(char)){
            result.push(char);
        }
    }
    return result;
}

console.log(removeDuplicate([1, 2, 3, 5, 3, 1, 9]));