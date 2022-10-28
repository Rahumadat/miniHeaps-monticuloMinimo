// let arr = [31, 22, -5, 9, 20, -8, -97, -50, 42, 88, -33, 27, 98, 40, -26, 72, 77, -12, 13, 44, -78, -2];
// function findMinimumValue(arr){
//     let minidx = 0;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < arr[minidx]){
//             minidx = i;
//         }
//     }
// console.log(arr[minidx]);
// return arr[minidx];
// }
// findMinimumValue(arr);

// let sortedarray = ["", 2, 10, 15, 22, 30, 35, 42, 51];
// function insertSorted(arr, val){
//     arr.push(val);
//     var i = arr.length - 1;
//     while(i > 0 && arr[i-1] > val){
//         arr[i] = arr[i-1];
//         i--;
//     }
//     arr[i] = val;
//     console.log(arr);
// }
// insertSorted(sortedarray, 21);

///////////////////////////////////////////////////////////////////////////////////////////////

function insertIntoHeap(heap, val){
    heap[0] = undefined;
    heap.push(val);
    let i = heap.length -1;
    let nodoPadre = Math.trunc(i / 2);
    while(heap[nodoPadre] > heap[i]) {
        let guardaVal = heap[nodoPadre];
        heap[nodoPadre] = heap[i];
        heap[i] = guardaVal;
        i = nodoPadre;
        nodoPadre = Math.trunc(i / 2);
        }
    console.log(heap);
}
// salidas de muestras:
// insertIntoHeap([], 13);  // altera el array vacío para que sea [undefined, 13]
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); // altera el array a [undefined, 3, 7, 10, 8, 9, 20, 14, 11]



// function MinHeap(){
//     this.heap = [];
//     this.insert = function(val){
//     // tu código va aquí
//     }
// }
        