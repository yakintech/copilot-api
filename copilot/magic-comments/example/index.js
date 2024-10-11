

//Dışarıdan string bir değer alan ( bu değer isim ve soyisim gibi düşünebilirsin.) Aldığı değerin sadece ilk harflerini büyütüp geri döndüren bir fonksiyon yazınız. Örnek "hello world" => "Hello World"


/**
 * Capitalizes the first letter of each word in a string.
 * @example capitalizeFirstLetter("hello world") // Output: "Hello World"
 */
function capitalizeFirstLetter(str) {
  if (typeof str !== 'string') {
    return "Invalid input";
  }
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage
console.log(capitalizeFirstLetter("hello world")); // Output: "Hello World"
console.log(capitalizeFirstLetter("john doe")); // Output: "John Doe"
console.log(capitalizeFirstLetter(123)); // Output: "Invalid input"
