// Task - V
function countChars(str: string) {
  let charCount: any = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}
console.log(countChars("hello"));

// Task - U
function sumOdds(num: number) {
  let a = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 === 1) {
      a.push(i);
    }
  }
  return a.length;
}

console.log(sumOdds(11));

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
