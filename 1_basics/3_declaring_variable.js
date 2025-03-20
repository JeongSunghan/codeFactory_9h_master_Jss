/**
 *  Variable 선언하기
 * 
 * 변수를 선언할 때 세 가지 키워드를 키억
 * 1) var - 더 이상 사용 안한다. -> 그러나 강의에서는 조금 많이 사용 할 예정(이해는 하기 위해서)
 * 2) let
 * 3) const
 * 
 */

/**
 * 그래서 선언은 어떻게? 
 * var 키워드 사용 후 앞에 변수의 이름을 작성한다,
 * 그 후 = 을 사용하여 앞에 어떤 값을 가질건지 작성
 */

var name = '변수입니다.'; 
// console.log('변수입니다'); 이렇게 출력을 해 줄 수 있지만, 변수를 사용하여 출력해보자

console.log(name);  // 변수입니다. 로 출력

//숫자도 표시된다~
var age = 25;
console.log(age);

let ive = '아이브';
console.log(ive);

/** 
 * let 과 var로 변수를 선언했을 때 특징
 * 선언 후 값을 바꿔줄 수 있다~
 * 선언 후 값을 바꿔줄 수 있다~
 * */ 

ive = '안유진';
console.log(ive);
//변경이 된 이후 출력되는 아이브는 '아이브'가 아닌 '안유진' 으로 출력된다.

//그렇다면 const는? 
const newJeans = '뉴진스';
console.log(newJeans);

//let에서와 마찬가지로 변경시도
// newJeans = '정성한';    
// console.log(newJeans);

//변경할려고 하면 에러 발생
/**
 * newJeans = '정성한';
         ^
         TypeError: Assignment to constant variable.
         'constant' 즉, const는 또 값을 배정 할 수 없는데~ 라고 알려준다.
         따라서, const는 선언 이후, 나중에 값을 바꿀 수 없다.
 */

/**
 * 선언과 할당
 * 
 * 1) 선언은 변수를 선언하는 것.
 * 2) 할당은 변수에 값을 넣어주는 것.
 */

// 선언 예시 => var or(let, const) name; => 이 자체가 선언
// 할당 예시 => var name = '할당';

//그럼 선언하고 할당이 없다면?
let noHalDang;
console.log(noHalDang); //undefined 로 출력된다. (변수는 선언했는데 값이 정의 되지 않았을 때 나오는 것)

//const는 다르다!
const noHalDang2; // const는 선언을 초기화 해줘야한다.





