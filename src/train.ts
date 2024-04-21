// Task - ZB
function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = randomBetween(30, 50);
console.log(randomNumber);

// Task - ZC
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

const fahrenheit = celsiusToFahrenheit(0);
console.log(fahrenheit);

/* Project Standards:
  - Logging standards
  - Naming standards
    CAMEL case : function, method, variable 
    PASCAL : class                            
    KEBAB case : folder - file
    SNAKE case : css
  - Error handling
*/

/* Request:
Traditional Api (form -> html ni uzini elementlari orqali Post request ni misol qilishimiz mumkin)
Rest Api
GraphQL Api
*/

/* Cookie:
  request: join
  self: destroy
*/

/* Validation:
  Frontend: validation
  Backend: validation
  Database: validation
*/
