export const Format_Currency = (price: number) => {
    return price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}
