// Task - I

function getDigits(input: string): string {
  const result = input.match(/\d+/g)?.join("");
  return result ? result : "";
}

console.log(getDigits("m14i1t"));

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
