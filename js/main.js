var table = document.getElementById('grid');
var body = table.getElementsByTagName('tbody')[0];
var rows = body.getElementsByTagName('tr');
var headers = ["sn", "surname", "name", "age", "profession"];
var array = [];

for (var i = 0; i < rows.length; i++) {
    var columns = rows[i].getElementsByTagName('td');
    var person = {};
    for (var j = 0; j < columns.length; j++) {
        person[headers[j]] = columns[j].textContent;
    }
    ;
    array.push(person);
}
;

var thead = document.getElementsByTagName('thead')[0];
var el;


function sortNumber(a, b) {
    return a[el] - b[el];
}


function sortString(a, b) {
    if (a[el] > b[el]) {
        return 1;
    }
    if (a[el] < b[el]) {
        return -1;
    }
    return 0;
}


function sortTable(thead, targetTh, btn) {
    var th = thead.getElementsByTagName('th');
    var arrayNew;
    for (var i = 0; i < th.length; i++) {
        if (th[i] == targetTh) {
            el = headers[i];
            if (th[i].classList.contains("number")) {
                arrayNew = array.slice(0, array.length).sort(sortNumber);
            } else {
                arrayNew = array.slice(0, array.length).sort(sortString);
            }
        }
    }

    if (btn.matches(".increase")) {
        rendering(arrayNew);
    } else if (btn.matches(".decrease")) {
        arrayNew.reverse();
        rendering(arrayNew);
    }
    ;
}


function reverse_sortTable(arrayNew) {
    return arrayNew.reverse();
}


function rendering(arrayNew) {
    body.innerHTML = '';
    var tr_add = document.querySelector("#tr_add").innerHTML;
    for (var i = 0; i < arrayNew.length; i++) {
        var html_1 = tr_add.replace("{{iNumber}}", arrayNew[i].sn);
        var html_2 = html_1.replace("{{surname}}", arrayNew[i].surname);
        var html_3 = html_2.replace("{{name}}", arrayNew[i].name);
        var html_4 = html_3.replace("{{age}}", arrayNew[i].age);
        var html_5 = html_4.replace("{{profession}}", arrayNew[i].profession);
        body.innerHTML = body.innerHTML + html_5;
    }
    ;
}


var btnTh = thead.getElementsByTagName('button');
for (var i = 0; i < btnTh.length; i++) {
    btnTh[i].addEventListener("click", function (event) {
        var targetElem = event.target;
        sortTable(targetElem.parentNode.parentNode, targetElem.parentNode, targetElem);
    });
}