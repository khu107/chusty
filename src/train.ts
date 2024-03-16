// Task - N
function palindromCheck(arr: string): boolean {
  let reverse = arr.split("").reverse().join("");
  return arr === reverse ? true : false;
}

console.log(palindromCheck("dad"));

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
