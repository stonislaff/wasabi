function generateOrderNumber() {
    const min = 100000;
    const max = 999999;
    const orderNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return orderNumber;
}

export default generateOrderNumber()