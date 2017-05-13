import './index.css';
import numeral from 'numeral';

/* eslint-disable no-console*/
/* comment again 2 */
const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
