function readData() {
    let inputArray = document.getElementById('inputArray').value.replace(new RegExp('\n', 'g'), '').split(',').map(item => parseInt(item))
    let isValid = true;
    inputArray.forEach(function(elem){
        if (isNaN(elem)){
            document.getElementById('validationError').innerHTML='Array contains non number element.';
            isValid = false;
        }
    });
    return isValid ? inputArray : undefined;

}

/**
 * clears results
 */
function clearPreviousResults() {
    document.getElementById('sortedArray').value='';
    document.getElementById('validationError').innerHTML='';
    document.getElementById('numberOfElements').innerText = '';
}

function processSorting() {
    clearPreviousResults();
    var inputArray = readData();
    if (inputArray) {
        var sortedArray = mergeSort(inputArray, 0, inputArray.length - 1);
        //print results
        document.getElementById('sortedArray').value = sortedArray.join(', ');
        document.getElementById('numberOfElements').innerHTML = inputArray.length;
    }
}

/**
 * core of the algo, that process sorting using merge sort algo:
 * https://en.wikipedia.org/wiki/Merge_sort
 */
function mergeSort(arr, left, right) {
    let result = [];
    if (left < right) {
        let middle = Math.floor((left + right) / 2);
        let leftTemp = mergeSort(arr, left, middle) ;
        let rightTemp = mergeSort(arr, middle + 1, right);
        //merge to arrays into one

        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < leftTemp.length && rightIndex < rightTemp.length) {
            if (leftTemp[leftIndex] < rightTemp[rightIndex]) {
                result.push(leftTemp[leftIndex]);
                leftIndex++;
            } else {
                result.push(rightTemp[rightIndex]);
                rightIndex++;
            }
        }
        while (leftIndex < leftTemp.length) {
            result.push(leftTemp[leftIndex]);
            leftIndex++;
        }
        while (rightIndex < rightTemp.length) {
            result.push(rightTemp[rightIndex]);
            rightIndex++;
        }
    } else {
        result.push(arr[left]);
    }
    return result;
}
