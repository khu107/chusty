// Task - ZH
function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums[nums.length - 1];
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (!nums.includes(i)) {
      res.push(i);
    }
  }
  return res;
}
console.log(findDisappearedNumbers([1, 3, 4, 7]));

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
