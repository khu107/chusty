// Task - Y
function findIntersection(arr1: number[], arr2: number[]): number[] {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const intersection = new Set([...set1].filter((x) => set2.has(x)));

  const intersectionArray = Array.from(intersection);

  intersectionArray.sort((a, b) => a - b);

  return intersectionArray;
}

console.log(findIntersection([1, 2, 3], [3, 2, 0]));

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
