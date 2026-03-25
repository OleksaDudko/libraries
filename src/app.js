// бібліотека Nanoid

// import { nanoid } from 'nanoid';

// const data = [
//   {
//     name: "Іван",
//     age: 25,
//     city: "Київ"
//   },
//   {
//     name: "Марія",
//     age: 30,
//     city: "Львів"
//   },
//   {
//     name: "Олег",
//     age: 22,
//     city: "Одеса"
//   }
// ];

// const result = data.map((elem) => {
//     return {
//         ...elem,
//         id: nanoid(5)
//     }
// })

// console.log(result);


// бібліотека PNotify

import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css'
defaultModules.set(PNotifyMobile, {});

const btnEl = document.querySelector(".btn")
btnEl.addEventListener("click", () => {
    error({
        title: 'Увага. Знайдено помилку',
        text: 'Не знайдений шлях до папки Sistem32',
        delay: 3000,
    });
})


