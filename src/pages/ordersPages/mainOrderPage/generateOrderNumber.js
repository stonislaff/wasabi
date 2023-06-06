/**
 * Generates a random order number between 100000 and 999999.
 *
 * @returns {number} The generated order number.
 */
function generateOrderNumber() {
    const min = 100000;
    const max = 999999;
    const orderNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return orderNumber;
}

export default generateOrderNumber()