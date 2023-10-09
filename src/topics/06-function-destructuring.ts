
export interface Product{
    description: string;
    price: number;
}

interface TextCalculationOptions{
    tax: number;
    products: Product[];
}


const phone : Product ={
    description: 'Nokia',
    price: 150.0
}

const tablet : Product ={
    description: 'iPad Air',
    price: 250.0
}



//function taxCalculation(options) : [number, number]{
//function taxCalculation({tax, procucts}) : [number, number]{
export function taxCalculation(options : TextCalculationOptions) : [number, number]{

    const {tax ,products} = options;

    let total = 0;

    products.forEach( product => {
        total += product.price;
    })

    return [total, total* tax];
}



const shopingCart =  [ phone, tablet ];
const tax = 0.15;

/*
const result = taxCalculation({
    products : shopingCart,
    tax
});
console.log('Total',  result[0]);
console.log('TAX',  result[1]);
*/


const [miproducto, miTax] :  number[] = taxCalculation({
    products : shopingCart,
    tax
});

console.log('Total',  miproducto);
console.log('TAX',  miTax);






