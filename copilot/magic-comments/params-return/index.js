
//dışıardan fiyat ve vergi oranını alan ve buna göre vergisini hesaplayan fonksiyon. Fiyat ve vergi oranı 0 dan küçük olamaz. Oran 0-1 arasında olmalıdır.


/**
 * Calculates the tax for a given price and tax rate.
 *
 * @param {number} price - The price of the item.
 * @param {number} taxRate - The tax rate as a decimal (e.g., 0.2 for 20%).
 * @returns {number|string} The calculated tax or "Invalid input" if the inputs are invalid.
 */
function calculateTax(price, taxRate) {
  if (price < 0 || taxRate < 0 || taxRate > 1) {
    return "Invalid input";
  }
  return price * taxRate;
}

