// var _ = require('');
import _ from 'lodash';

const data = [
  {
    username:'Anibal',
    role: 'admin'
  },
  {
    username:'Daniela',
    role: 'seller'
  },
  {
    username:'Anastasia',
    role: 'customer'
  },
  {
    username:'Andrea',
    role: 'customer'
  },
  {
    username:'Camila',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item)=>item.role);
console.log(rta);


