'use strict';
 {
    //error-check
    const validationForm = document.querySelector('.validationForm');
    if(validationForm) {
        const requiredElems = document.querySelectorAll('.required');
        const emailElems = document.querySelectorAll('.email');
        const telElems = document.querySelectorAll('.tel-2');

        const createError = (elem, errorMessage) => {
            const errorSpan = document.createElement('span');
            errorSpan.classList.add('error');
            errorSpan.textContent = errorMessage;
            elem.parentNode.appendChild(errorSpan);
        }

        validationForm.addEventListener('submit', (e) => {
            const errorElems = validationForm.querySelectorAll('.error');
                errorElems.forEach((elem) => {
                elem.remove();
            }); 

            requiredElems.forEach((elem) => {
                const elemValue = elem.value.trim();
                if(elemValue.length === 0) {
                    createError(elem, '入力は必須です');
                    e.preventDefault();
                }
            });

            emailElems.forEach((elem) => {
                const pattern = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ui;
                if(elem.value !=='') {
                    if(!pattern.test(elem.value)) {
                    createError(elem, 'メールアドレスの形式が正しくないようです。');
                    e.preventDefault();
                    }
                }
            });

            telElems.forEach((elem) => {
                const pattern = /^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/;
                if(elem.value !=='') {
                    if(!pattern.test(elem.value)) {
                    createError(elem, '電話番号の形式が正しくないようです。');
                    e.preventDefault();
                    }
                }
            });
        });
    } 
 }
 