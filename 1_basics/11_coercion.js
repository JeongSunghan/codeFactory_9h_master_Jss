/**
 * 타입 변환
 * Type Conversion 
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적 예시
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
console.log('------------------------------------');

// 암묵적 예시
let test = age + ''; 
console.log(typeof test, test); 

// 암묵적 예시의 이상한 Ver.
console.log('98' + 2);  // 982가 나온다. 왜? -> 98은 string 값, 그러나 더하기 2를 했을떄 어느한쪽으로 타입을 변환해야해서 오른쪽 2를 string 타입으로 변환
console.log('98' * 2);  // 여기는 정상적으로 곱했다? -> string에는 *(곱셉) 개념이 없다. 98의 타입을 number(강제)로 변환
console.log('98' - 2);  // 곱셉과 같음
// JS가 기능적으로 이게 실제로 작동한다는 것이지 사용하라는 것이 아니다. -> 모든 로직은 보는이가 편안해야 한다.
// 그러므로 이런 기괴한 현상으로 인해 버그가 생기지 않게 항상 타입이 같은 것끼리 연산을 사용하자
console.log('------------------------------------');

/**
 * 명시적 변환 추가 학습
 */

// 명시적으로 무언가를 string로 바꿀때는, 일반적으로 toString 함수를 사용
console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());
console.log('------------------------------------');

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0')); // parseInt : 정수로 변환해라
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // parseFloat : 실수로 변환해라 (소수점 까지 포함하고 싶다면)
console.log(typeof +'1', +'1');


console.log('------------------------------------');

/**
 * Boolean 타입으로 변환
 */
//string 안에 값이 있다면, 어떤 값이 있더라도 true, 아무런 값이 없다면 false
console.log(!!'x');
console.log(!!'ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹㅇㄴㅁasdfsadfsadf3214324324!!!');
console.log(!!'');
console.log('------------------------------------');

console.log(!!0);   //false
console.log(!!'0'); //true
console.log(!!'false'); //true
console.log(!!false);   //false
console.log(!!undefined);   //false
console.log(!!null);   //false
//값이 없다면 false, 값이 있다면 true
console.log('------------------------------------');

console.log(!!{});  //object는 값이 있든 없든 true
console.log(!![]);  //array 또한 마찬가지
console.log('------------------------------------');

/**
 * 1) 아무 글자도 없는 string은 
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */











