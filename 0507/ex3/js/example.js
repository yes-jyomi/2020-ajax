function choice() {
    if (confirm('더하기로 하시겠어요?'))
        return 'addition';
    else
        return 'operator';
}

var table = 3;
var operator = choice();
var i = 1;
var msg = '';

// 데이터 타입까지 비교.
if (operator === 'addition') {
    while (i < 11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br/>';
        i++;
    }
} else {
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br/>';
        i++;
    }
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;