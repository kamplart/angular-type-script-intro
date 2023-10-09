import {Product,taxCalculation} from './06-function-destructuring'


const shopingCart :  Product[] = [
    {
        description:'Nokia',
        price:100
    },
    {
        description:'iPad',
        price:150
    },
];

_tax = 0.15;

const [total, tax] = taxCalculation({
    products : shopingCart,
    tax
});



console.log('Total',  total);
console.log('TAX',  tax);