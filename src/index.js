import './index.scss';
import Header from './Header';

const root = document.getElementById('root');
root.append(Header);


// import { calculate }  from "./calc.js"

// console.log(calculate(2, 4));

// console.log(Header);

const myImg = require('./assets/crossroads.jpg');//если img находится в 'assets'

document.body.innerHTML += `
<img class="my-img" src="${myImg}" alt="img">
`;

// если картинка находится в папке 'public'то:
// document.body.innerHTML += `
// <img class="my-img" src="./images/crossroads.jpg" alt="img">
// `;
