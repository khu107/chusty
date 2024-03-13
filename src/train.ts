// Task - L
function reverseSentence(str: string): string {
  return str
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseSentence("we like coding!"));

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
