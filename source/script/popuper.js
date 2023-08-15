// popuper 0.2
// Находим попапы
let popups = document.querySelectorAll('.popup'); // все попапы
// открывающие элементы (*1)
// let popupOpenEducation = document.querySelector('#popup-open-education'); 
// let popupOpenVoice = document.querySelector('#popup-open-voice'); 
let popupOpenVersion1 = document.querySelector('#popup-open-version1');
let popupOpenVersion2 = document.querySelector('#popup-open-version2');
let popupOpenVersion3 = document.querySelector('#popup-open-version3');


// // открывающие элементы
// popupOpenEducation.onclick = function (event) {
//     let popupEducation = document.querySelector('#popup_education'); 
//     if (popupEducation.style.display === 'block') {
//         popupEducation.style.display = 'none';
//     } else {
//         popupEducation.style.display = 'block';
//     }
// }


// popupOpenVoice.onclick = function (event) {
//     let popupVoice = document.querySelector('#popup_voice'); 
//     if (popupVoice.style.display === 'block') {
//         popupVoice.style.display = 'none';
//     } else {
//         popupVoice.style.display = 'block';
//     }
// }

if (popupOpenVersion1) {
    popupOpenVersion1.onclick = function (event) {
        let popupVersion1 = document.querySelector('#popup_version1'); 
        if (popupVersion1.style.display === 'block') {
            popupVersion1.style.display = 'none';
        } else {
            popupVersion1.style.display = 'block';
        }
    }
};

if (popupOpenVersion2) {
    popupOpenVersion2.onclick = function (event) {
        let popupVersion1 = document.querySelector('#popup_version2'); 
        if (popupVersion1.style.display === 'block') {
            popupVersion1.style.display = 'none';
        } else {
            popupVersion1.style.display = 'block';
        }
    }
};

if (popupOpenVersion3) {
    popupOpenVersion3.onclick = function (event) {
        let popupVersion1 = document.querySelector('#popup_version3'); 
        if (popupVersion1.style.display === 'block') {
            popupVersion1.style.display = 'none';
        } else {
            popupVersion1.style.display = 'block';
        }
    }
};

// новая версия popuper 0.2, удаленны упоминания блога :(, добавлены классы для nav(изменена структура)