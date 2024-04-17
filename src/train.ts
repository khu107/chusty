// Task - ZA
interface Person {
  age: number;
}

function sortByAge(people: Person[]): Person[] {
  return people.sort((a, b) => a.age - b.age);
}

console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));

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
