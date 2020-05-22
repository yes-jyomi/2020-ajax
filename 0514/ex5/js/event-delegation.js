function query() {
    var ret = confirm('네이버로 이동하시겠습니까?');

    return ret;
}

function noAction(e) {
    e.preventDefault();
}

var link = document.getElementById('link');
link.addEventListener('click', query, false);
var no_Action = document.getElementById('no_action');
no_Action.addEventListener('click', noAction, false);