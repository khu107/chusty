// Task - J
function findLongestWord(str: string): string {
  let result = str
    .split(" ")
    .reduce((acc, curr) => (acc.length >= curr.length ? acc : curr));
  return result;
}
console.log(findLongestWord("I come from Uzbekistan"));

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
