// Task - O
function calculateSumOfNumbers(arr: any[]): number {
  return arr.reduce((acc, curr) => {
    if (typeof curr === "number") return acc + curr;
    else return acc;
  }, 0);
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

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
