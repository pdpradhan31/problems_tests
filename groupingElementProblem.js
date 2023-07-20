function groupArrayElements(array, cols) {
    function split(array, cols) {
        if (cols==1) return array;
        var size = Math.ceil(array.length / cols);
        return array.slice(0, size).concat([null]).concat(split(array.slice(size), cols-1));
    }    
    var a = split(array, cols);
    var groups = [];
    var group = [];
    for(var i = 0; i < a.length; i++) {
        if (a[i] === null) {
            groups.push(group);
            group = [];
            continue;
         }
        group.push(a[i]);  
    }
    groups.push(group);
    return groups;
}


var arr = [1, 2, 3, 4, 5];
let noOfDivision = 3
let result = groupArrayElements(arr, noOfDivision);
console.log(result)