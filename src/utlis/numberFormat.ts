export function numberFormat(number : string) {
     return Number(number) > 1 ? `$ ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : `$ ${Number(number).toLocaleString('en-US', { currency: 'USD'})}`
    
}