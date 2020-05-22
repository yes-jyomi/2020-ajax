function checkUsername() {
    var username = el.value;
    
    if (username.length < 5) {
        elMsg.className = 'warning';
        elMsg.textContent = '이름이 너무 짧습니다.';
    } else {
        elMsg.textContent = '';
    }
}

function tipUsername() {
    elMsg.classname = 'tip';
    elMsg.innerHTML = '이름은 5글자 이상이어야 합니다.';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);