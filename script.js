function sort(){
    let inputStr = document.getElementById("InputArea").value;

    if (inputStr.search(/[^-,\d]/g) > -1) {
        document.getElementById("OutputArea").value = "Array contains NaNs!!!";
        return;
    }
    let arr = inputStr.split(",");
    while(true){
        if(arr.indexOf("") !== -1)
            arr.splice(arr.indexOf(""), 1);
        else
            break;
    }
    arr = insertion_Sort(arr);
    document.getElementById("OutputArea").value = arr;
}

function insertion_Sort(rr) {
    for (let i = 1; i < rr.length; i++) {
        let j = i - 1;
        let temp = rr[i];
        while (j >= 0 && +rr[j] > +temp) {
            rr[j + 1] = rr[j];
            j--;
        }
        rr[j+1] = temp
    }
    return rr;
}

function clearAreas() {
    document.getElementById("InputArea").value = "";
    document.getElementById("OutputArea").value = "";
}
