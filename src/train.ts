// Task - M
interface NumberSquare {
  number: number;
  square: number;
}
function getSquareNumbers(arr: number[]): NumberSquare[] {
  return arr.map((num) => {
    return {
      number: num,
      square: num * num,
    };
  });
}

console.log(getSquareNumbers([1, 2, 3]));

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
Traditional Api
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
