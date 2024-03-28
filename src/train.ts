// Task - R
function calculate(expression: string): number | null {
  try {
    var result = eval(expression);
    return result;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}

// 함수 테스트
var result = calculate("1+3");
console.log(result); // 결과는 4가 될 것입니다.

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
