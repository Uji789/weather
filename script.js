let select = document.querySelector('.form-select');
weather();

select.addEventListener('change', function () {
    weather();
});

function weather() {
    let apiKey = "d0efbb7701f869ccf25112e659ca716b";
    let city = select.value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${apiKey}`;


    let xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4 || xhr.status !== 200) {
            return;
        }

        const response = xhr.response;
        console.log(response);

        document.querySelector('.city').innerHTML = response.city.name;
        
        // дата сегодня
        let arr = response.list[0].dt_txt;
        let arr2 = arr.slice(0,10)
        // console.log(arr2);

        let dateFunc = function () {
            return arr2.split("-").reverse().join(".");
        }

        // дата завтра
        let arrT = response.list[5].dt_txt;
        let arrT2 = arrT.slice(0,10);

        let dateFuncTomorrow = function () {
            return arrT2.split("-").reverse().join('.')
        }

        // дата послезавтра
        let arrA = response.list[13].dt_txt;
        let arrA2 = arrA.slice(0,10);

        let dateAfterTomorrow = function () {
            return arrA2.split("-").reverse().join(".")
        }

        document.querySelector('.date').innerHTML = dateFunc();
        document.querySelector('.date-t').innerHTML = dateFuncTomorrow();
        document.querySelector('.date-a').innerHTML = dateAfterTomorrow();

        // сегодня
        // 00.00
        // document.querySelector('.wind-0').innerHTML = response.list[].wind.speed;
        // document.querySelector('.humidity-0').innerHTML = response.list[].main.humidity;
        // document.querySelector('.temp-0').innerHTML = response.list[].main.temp;
        // 3.00
        // document.querySelector('.wind-3').innerHTML = response.list[].wind.speed;
        // document.querySelector('.humidity-3').innerHTML = response.list[].main.humidity;
        // document.querySelector('.temp-3').innerHTML = response.list[].main.temp;
        // 6.00
        // document.querySelector('.wind-6').innerHTML = response.list[].wind.speed;
        // document.querySelector('.humidity-6').innerHTML = response.list[].main.humidity;
        // document.querySelector('.temp-6').innerHTML = response.list[].main.temp;
        // 9.00
        document.querySelector('.wind-9').innerHTML = response.list[0].wind.speed;
        document.querySelector('.humidity-9').innerHTML = response.list[0].main.humidity;
        document.querySelector('.temp-9').innerHTML = response.list[0].main.temp;
        // 12.00
        document.querySelector('.wind-12').innerHTML = response.list[1].wind.speed;
        document.querySelector('.humidity-12').innerHTML = response.list[1].main.humidity;
        document.querySelector('.temp-12').innerHTML = response.list[1].main.temp;
        // 15.00
        document.querySelector('.wind-15').innerHTML = response.list[2].wind.speed;
        document.querySelector('.humidity-15').innerHTML = response.list[2].main.humidity;
        document.querySelector('.temp-15').innerHTML = response.list[2].main.temp;
        // 18.00
        document.querySelector('.wind-18').innerHTML = response.list[3].wind.speed;
        document.querySelector('.humidity-18').innerHTML = response.list[3].main.humidity;
        document.querySelector('.temp-18').innerHTML = response.list[3].main.temp;
        // 21.00
        document.querySelector('.wind-21').innerHTML = response.list[4].wind.speed;
        document.querySelector('.humidity-21').innerHTML = response.list[4].main.humidity;
        document.querySelector('.temp-21').innerHTML = response.list[4].main.temp;

        // завтра
        // 00.00
        document.querySelector('.wind-t-0').innerHTML = response.list[5].wind.speed;
        document.querySelector('.humidity-t-0').innerHTML = response.list[5].main.humidity;
        document.querySelector('.temp-t-0').innerHTML = response.list[5].main.temp;
        // 3.00
        document.querySelector('.wind-t-3').innerHTML = response.list[6].wind.speed;
        document.querySelector('.humidity-t-3').innerHTML = response.list[6].main.humidity;
        document.querySelector('.temp-t-3').innerHTML = response.list[6].main.temp;
        // 6.00
        document.querySelector('.wind-t-6').innerHTML = response.list[7].wind.speed;
        document.querySelector('.humidity-t-6').innerHTML = response.list[7].main.humidity;
        document.querySelector('.temp-t-6').innerHTML = response.list[7].main.temp;
        // 9.00
        document.querySelector('.wind-t-9').innerHTML = response.list[8].wind.speed;
        document.querySelector('.humidity-t-9').innerHTML = response.list[8].main.humidity;
        document.querySelector('.temp-t-9').innerHTML = response.list[8].main.temp;
        // 12.00
        document.querySelector('.wind-t-12').innerHTML = response.list[9].wind.speed;
        document.querySelector('.humidity-t-12').innerHTML = response.list[9].main.humidity;
        document.querySelector('.temp-t-12').innerHTML = response.list[9].main.temp;
        // 15.00
        document.querySelector('.wind-t-15').innerHTML = response.list[10].wind.speed;
        document.querySelector('.humidity-t-15').innerHTML = response.list[10].main.humidity;
        document.querySelector('.temp-t-15').innerHTML = response.list[10].main.temp;
        // 18.00
        document.querySelector('.wind-t-18').innerHTML = response.list[11].wind.speed;
        document.querySelector('.humidity-t-18').innerHTML = response.list[11].main.humidity;
        document.querySelector('.temp-t-18').innerHTML = response.list[11].main.temp;
        // 21.00
        document.querySelector('.wind-t-21').innerHTML = response.list[12].wind.speed;
        document.querySelector('.humidity-t-21').innerHTML = response.list[12].main.humidity;
        document.querySelector('.temp-t-21').innerHTML = response.list[12].main.temp;

        // послезавтра
        // 00.00
        document.querySelector('.wind-a-0').innerHTML = response.list[13].wind.speed;
        document.querySelector('.humidity-a-0').innerHTML = response.list[13].main.humidity;
        document.querySelector('.temp-a-0').innerHTML = response.list[13].main.temp;
        // 3.00
        document.querySelector('.wind-a-3').innerHTML = response.list[14].wind.speed;
        document.querySelector('.humidity-a-3').innerHTML = response.list[14].main.humidity;
        document.querySelector('.temp-a-3').innerHTML = response.list[14].main.temp;
        // 6.00
        document.querySelector('.wind-a-6').innerHTML = response.list[15].wind.speed;
        document.querySelector('.humidity-a-6').innerHTML = response.list[15].main.humidity;
        document.querySelector('.temp-a-6').innerHTML = response.list[15].main.temp;
        // 9.00
        document.querySelector('.wind-a-9').innerHTML = response.list[16].wind.speed;
        document.querySelector('.humidity-a-9').innerHTML = response.list[16].main.humidity;
        document.querySelector('.temp-a-9').innerHTML = response.list[16].main.temp;
        // 12.00
        document.querySelector('.wind-a-12').innerHTML = response.list[17].wind.speed;
        document.querySelector('.humidity-a-12').innerHTML = response.list[17].main.humidity;
        document.querySelector('.temp-a-12').innerHTML = response.list[17].main.temp;
        // 15.00
        document.querySelector('.wind-a-15').innerHTML = response.list[18].wind.speed;
        document.querySelector('.humidity-a-15').innerHTML = response.list[18].main.humidity;
        document.querySelector('.temp-a-15').innerHTML = response.list[18].main.temp;
        // 18.00
        document.querySelector('.wind-a-18').innerHTML = response.list[19].wind.speed;
        document.querySelector('.humidity-a-18').innerHTML = response.list[19].main.humidity;
        document.querySelector('.temp-a-18').innerHTML = response.list[19].main.temp;
        // 21.00
        document.querySelector('.wind-a-21').innerHTML = response.list[20].wind.speed;
        document.querySelector('.humidity-a-21').innerHTML = response.list[20].main.humidity;
        document.querySelector('.temp-a-21').innerHTML = response.list[20].main.temp;
    };
};


