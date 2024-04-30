// Task - ZF
function capitalizeWords(input: string): string {
  const words: string[] = input.split(" ");
  const capitalizedWords: string[] = [];
  for (const word of words) {
    if (word.length <= 2) {
      capitalizedWords.push(word);
    } else {
      capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
  }
  return capitalizedWords.join(" ");
}
console.log(capitalizeWords("name should be a string"));

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
