// Task - X
function countOccurrences(obj: any, key: string): number {
  let count = 0;

  if (typeof obj === "object" && obj !== null) {
    for (const k in obj) {
      if (k === key) {
        count += 1;
      }
      count += countOccurrences(obj[k], key);
    }
  }

  return count;
}

console.log(
  countOccurrences(
    { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
    "model"
  )
);

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
