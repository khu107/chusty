// Task - ZD
function changeNumberInArray(
  index: number,
  arr: number[],
  newNumber: number
): number[] {
  if (index >= 0 && index < arr.length) {
    arr[index] = newNumber;
  }
  return arr;
}

console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));

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
