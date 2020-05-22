(function() {
    // 첫 번째 부분: 호텔 객체 생성, 할일 행사에 대한 상세 정보 출력
    // 축약형 표기법을 이용하여 hotel 객체 생성
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }
    
    // 호텔 이름, 밥 가격, 할인률 출력
    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate;
    specialRate.textContent = '$' + hotel.offerPrice().toFixed(2);

    // 두 번째 부분: 할인 행사 상세 정보를 계산, 출력
    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        
        // 날짜에 7일을 더한다 (7일에 해당하는 밀리 초 더하기)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

        // 페이지에 날짜를 출력하기 위해 날짜의 각 부분 값을 가져옴.
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = '할인 행사는 ';
        expiryMsg += day + ' 에 마감합니다.<br/>(' + year + '년 ' + month + ' ' + date + '일)';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

    // 즉시 호출 함수 표현식을 마무리 함.
}());