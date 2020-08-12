const InputArea = document.getElementById("InputArea");
const OutputArea = document.getElementById("OutputArea");

function sort(){
    let inputStr = InputArea.value;
    //проверяет по реджекс чтобы в строку входили только цифры, запятые и минусы (хотя с ними может быть беда...:()
    if (inputStr.search(/[^-,\d]/g) > -1) {
        //если есть другой символ то сортировка даже не запускается
        //и в текстовую строку выводит сообщение об ошибке
        document.getElementById("OutputArea").value = "Array contains NaNs!!!";
        return;
    }
    //разбитие строки по ","
    let arr = inputStr.split(",");
    //цикл для удаление пустых елементов
    //можно было придумать что-то получше...
    while(true){
        if(arr.indexOf("") !== -1)
            arr.splice(arr.indexOf(""), 1);
        else
            break;
    }
    OutputArea.value = insertionSort(arr);
}

function insertionSort(_arr) {
    //проходит по всем елементам массива
    for (let i = 1; i < _arr.length; i++) {
        //выберает i-й елемент для сравнения со всем что стоят до него
        let comp = _arr[i];
        //счетчик елементов до проверочного елемента
        let j = i - 1;
        //пока счетчик больше нуля и елемент с индексом счетчика больше елемента
        //для проверки, елементы сдвигаються на один вправо
        for(; j >= 0 && +_arr[j] > +comp; j--)
            _arr[j + 1] = _arr[j];
        //как только елемент для сравнения нашел сове место его значение присваивается елементу с индексом счетчика +1
        _arr[j+1] = comp;
    }
    //конец :)
    return _arr;
}

function clearAreas() {
    //чистим-чистим ))))
    InputArea.value = "";
    OutputArea.value = "";
}
