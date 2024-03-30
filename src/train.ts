// Task - S
function missingNumber(nums: number[]): number {
  const n: number = nums.length;
  const totalSum: number = (n * (n + 1)) / 2;
  const arraySum: number = nums.reduce((sum, num) => sum + num, 0);
  return totalSum - arraySum;
}

console.log(missingNumber([3, 0, 1]));

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
