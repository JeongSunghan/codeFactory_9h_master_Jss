/**
 *  Hoisting
 *
 */

console.log('Hello');
console.log('World');
console.log("----------------------");


//무조건 첫번째 순서대로 출력이 됨, 만약 Hello부터 순서대로 출력이 안된다면 컴퓨터가 잘못? 된걸거다.. 아니면 AI가 세상을 지배함

//호이스팅의 예시
console.log(name);      //정답은 undefined -> 값을 할당하지 않았을 때
var name = '코드팩토리';
console.log(name);

/**
 *  그래서 호이스팅이 뭔데?
 * 
 *  모든 변수 선언문이 코드의 최상단으로 이동하는 것처럼 느껴지는 현상을 이야기한다. -> 추후 정확하게 배울예정
 *  let과 const도 호이스팅이 가능한지? -> 호이스팅이 된다.
*/

console.log(yuJin);     //Cannot access 'yuJin' before initialization(유진이라는 변수를 초기화 하기전에 접근 할 수 없다.) -> 그럼 let 호이스팅이 안되나?(1)
let yuJin = '안유진';   //그럼 yuJin이라는 변수를 주석처리하고 실행한다면? (2) = yuJin is not defined(유진이라는 변수는 정의되지 않았다.)

/**
 * 정리?
 * let으로 선언을 한 상태에서 호이스팅이 발생한 것 처럼, yuJin변수 선언 전에 엑세스를 해버리면 실제 유진이란 변수가 존재는 한다.
 * yuJin 변수가 이미 호이스팅 되어서 undefined라고 배정이 되어 있는데
 * let으로 선언을 했기 떄문에, yuJin 변수에다가 값을 할당하는 순간이 오기 전에는 접근을 할 수가 없다.
 */


// let과 const는 var와 호이스팅의 경우를 막아주는 즉, 값이 초기화 되기전 값을 미리 가져오는 버그를 방지가 가능하다! -> let/const를 쓰는 괴장히 여러가지 이유 중 하나!
// 변수 뿐만이 아닌 호이스팅은 함수에도 적용이 된다!!



