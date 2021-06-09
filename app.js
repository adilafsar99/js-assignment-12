//Delete Row Function
function deleteRow(row) {
    row.innerHTML = "";
}

//Increase Decrease Count
function add(count) {
    var intValue = Number(count.innerHTML);
    intValue += 1;
    count.innerHTML = intValue;
}

function subtract(count) {
    count.innerHTML -= 1;
}
