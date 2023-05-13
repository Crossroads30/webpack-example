import htmlToElement from '../utils/htmlToElement';
import Header from './index.html';
import Button from '../Button';

import './index.scss';

const header = htmlToElement(Header);

const customButton = Button({ 
   onClick: () => console.log('Hello Webpack!'),
   title: 'Custom button',
   className: 'header-button'
});
//header.appendChild(Button);
header.appendChild(customButton);

export default header;