



//Dışarıdan bir fiyat ve vergi oranı alan ve buna göre vergisini hesaplayan fonksiyon. Fiyat ve vergi oranı 0 dan küçük olamaz. Oran 0-1 arasında olmalıdır. Eğer vergi oranı 0-1 arasınmda ise bir exception fırlatılmalıdır.


/**
 * Calculates the tax for a given price and tax rate.
 * 
 * @param {number} price - The price of the item.
 * @param {number} taxRate - The tax rate to be applied (between 0 and 1).
 * @throws {Error} If the price is less than 0 or the tax rate is not between 0 and 1.
 * @returns {number} The calculated tax.
 */
function calculateTax(price, taxRate) {
    if (price < 0 || taxRate < 0 || taxRate > 1) {
        throw new Error("Invalid input: Price must be non-negative and tax rate must be between 0 and 1");
    }
    return price * taxRate;
}
