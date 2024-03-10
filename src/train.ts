// Task - K
function countVowels(str: string): number {
  let unli = ["a", "i", "o", "u", "e"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (unli.includes(str[i])) count++;
  }
  return count;
}
console.log(countVowels("string1"));

/* Project Standards:
  - Logging standards
  - Naming standards
    CAMEL case : function, method, variable 
    PASCAL : class                            
    KEBAB case : folder - file
    SNAKE case : css
  - Error handling
*/

/*
Traditional Api
Rest Api
GraphQL Api
*/
