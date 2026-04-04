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

// import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css'
// defaultModules.set(PNotifyMobile, {});

// const btnEl = document.querySelector(".btn")
// btnEl.addEventListener("click", () => {
//     error({
//         title: 'Увага. Знайдено помилку',
//         text: 'Не знайдений шлях до папки Sistem32',
//         delay: 3000,
//     });
// })


// бібліотека Chart.js

// import Chart from 'chart.js/auto';
// const ctx = document.getElementById('myChart');

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//     label: 'Temperature',
//     data: [12, 14, 16, 18, 20, 22, 24],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };

// const config = {
//   type: 'line',
//   data: data,
//   options: {}
// };


// const data = {
//   labels: [
//     'Red',
//     'Blue',
//     'Yellow'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
//     hoverOffset: 4
//   }]
// };

// const config = {
//   type: 'doughnut',
//   data: data,
// };


// const data = {
//   labels: [
//     'Eating',
//     'Drinking',
//     'Sleeping',
//     'Designing',
//     'Coding',
//     'Cycling',
//     'Running'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 90, 81, 56, 55, 40],
//     fill: true,
//     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//     borderColor: 'rgb(255, 99, 132)',
//     pointBackgroundColor: 'rgb(255, 99, 132)',
//     pointBorderColor: '#fff',
//     pointHoverBackgroundColor: '#fff',
//     pointHoverBorderColor: 'rgb(255, 99, 132)'
//   }, {
//     label: 'My Second Dataset',
//     data: [28, 48, 40, 19, 96, 27, 100],
//     fill: true,
//     backgroundColor: 'rgba(54, 162, 235, 0.2)',
//     borderColor: 'rgb(54, 162, 235)',
//     pointBackgroundColor: 'rgb(54, 162, 235)',
//     pointBorderColor: '#fff',
//     pointHoverBackgroundColor: '#fff',
//     pointHoverBorderColor: 'rgb(54, 162, 235)'
//   }]
// };

// const config = {
//   type: 'radar',
//   data: data,
//   options: {
//     elements: {
//       line: {
//         borderWidth: 3
//       }
//     }
//   },
// };

// const myChart = new Chart(ctx, config);


// бібліотека Basicilightbox

const btnEl = document.querySelector(".btn")
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Ви підписалися на наш сайт. Тепер ми маєм всю інформацію про тебе
            Хорошого вам дня
        </p>
    </div>
`)

btnEl.addEventListener("click", () => {
    instance.show()
})

window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
        instance.close()
    }
})