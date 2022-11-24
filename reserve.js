'use strict';
{
    //select-box 
    let userBirthdayYear = document.querySelector('.year');
    let userBirthdayMonth= document.querySelector('.month');
    let userBirthdayDay = document.querySelector('.day');

    function createOptionForElements(el, val) {
        let option = document.createElement('option');
        option.text = val;
        option.value = val;
        el.appendChild(option);   
    }

    for(let i = 2022; i <= 2025; i++) {
        createOptionForElements(userBirthdayYear, i);
    }
    for(let i = 1; i <= 12; i++) {
        createOptionForElements(userBirthdayMonth, i);
    }
    for(let i = 1; i <= 31; i++) {
        createOptionForElements(userBirthdayDay, i);
    }

    function changeTheDay() {
        userBirthdayDay.innerHTML = "";
        let lastDayOfTheMonth = new Date(userBirthdayYear.value, userBirthdayMonth.value, 0).getDate();
        for(let i = 1; i <= lastDayOfTheMonth; i++) {
            createOptionForElements(userBirthdayDay, i);
        }
    }

    userBirthdayYear.addEventListener('change', function() {
        changeTheDay();
    });
    userBirthdayMonth.addEventListener('change', function() {
        changeTheDay();
    });
}

