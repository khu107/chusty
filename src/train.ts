// Task - ZI

function delayHelloWorld(str: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, 3000);
  });
}

delayHelloWorld("Hello World").then((data) => console.log(data));

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
