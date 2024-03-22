// Task - P
function objectToArray(obj: { [key: string]: any }): [string, any][] {
  return Object.entries(obj);
}

console.log(objectToArray({ a: 10, b: 20 }));

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
