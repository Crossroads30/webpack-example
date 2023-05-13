//создание элемента 'button'
// import htmlToElement from '../utils/htmlToElement';
// import Button from './index.html';

// import './index.scss';

// const button = htmlToElement(Button);
// export default button;


//создание элемента 'button' функцией:
import htmlToElement from '../utils/htmlToElement';
import ButtonHTML from './index.html';

import './index.scss';

const Button = ({ onClick, title, className }) => {
   const buttonElement = htmlToElement(ButtonHTML);
   buttonElement.innerHTML = title;
   buttonElement.classList.add(className);
   buttonElement.addEventListener('click', onClick);
   return buttonElement;
};

export default Button;