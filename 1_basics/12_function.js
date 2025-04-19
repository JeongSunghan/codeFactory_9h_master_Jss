/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/2 % 3 string으로 변환해서 반환받고싶다면 어떻게 해야할까?
 */

console.log((((2 * 10) / 2) % 3).toString()); //하지만 숫자2를 3 혹은 다른 숫자로 바꾸고 싶을때는?
console.log((((3 * 10) / 2) % 3).toString()); //뭐 이렇게 표현은 가능하다만? 2와 3을 제외한 나머지 수식이 전부 중복이다!
console.log("---------------------------------");

/**
 * DRY
 *
 * D -> Don't
 * R -> Reapeat
 * Y -> Yourself
 *
 * 이 규칙을 지키는데 좋은 코드를 작성하는데 도움이 된다.
 */

// 함수 사용방법
function calculate() {
  console.log((((2 * 10) / 2) % 3).toString()); //함수 정의
  //그렇다면 2 라는 숫자를 바꿀려면 어떻게 해야할까?  -> parameter사용
}
//calculate();  함수 호출
console.log("---------------------------------");

//parameter를 이용한 calculate 사용
function calculate(number) {
  //number = parameter
  console.log((((number * 10) / 2) % 3).toString());
}
calculate(4); //4 = argument
console.log("---------------------------------");

/**
 * parameter와 Argument의 차이
 *
 * '함수에서 입력' 받는 값에 대한 정의는 parameter
 *
 * '실제 입력' 하는 값은 Argument
 */

//여러개를 사용하는 Parameter
function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 4); //Argument 입력
console.log("---------------------------------");

//default Parameter
function multiply(x, y = 10) {
  console.log(x * y);
}
multiply(2); //20 출력
console.log("---------------------------------");

/**
 * 반환받기
 * return 받기
 *
 * 이전까지는 작성한 코드는 함수 내부에서 모든 작업이 실행했다.
 * 그러나 x * y 의 결과값을 함수 외부에서, 즉 실행하고 값을 반환받고 싶으면 어떻게 해야되나? -> return 을 사용한다.
 */

function multiply(x, y) {
  return x * y;
  //스코프라고 해서, 함수 안에서 정의한것들은 함수 안에서만 존재한다.
  //함수 안에서 존재하는것을 밖에서 반환을 받는것이 return 키워드이다.
}

const result1 = multiply(2, 4);
console.log(result1);
console.log("---------------------------------");

const result2 = multiply(4, 5);
console.log(result2);
console.log("---------------------------------");

/**
 * Arrow 함수
 */

const multiply2 = (x, y) => {
  //arrow함수 => 괄호에는 (파라미터)
  //안에는 함수body를 지정
  return x * y;
};
console.log(multiply2(3, 4));
console.log("---------------------------------");
//일반 함수와 arrow 함수의 기능이 완전히 같지는 않지만, 위와 같은식으로 사용하는 상황에서는 똑같다.
//차이점은 class, object에서 배울 예정

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));
console.log("---------------------------------");
//왜 위와같은 방법이 있고 아래도있는데, 아래처럼 쓰는 방법이 존재하냐? => 그냥..간편해서
//프레임워크나 라이브러리를 배우면 그때는 이해의 영역, 언어는 단순한 암기의 영역

//파라미터를 한개만 받는 경우 -> 괄호 생략 가능
const multiply4 = x => x * 2;
console.log(multiply4(4));
console.log("---------------------------------");

//복잡한 형태의 함수 선언
const multiply5 = (x) => (y) => (z) => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply5(2)(5)(7)); //각각의 함수는 파라미터를 하나씩 받고, 다음 함수를 리턴함
console.log("---------------------------------");

//multiply5의 함수를 일반함수로 작성했을 때
function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x}, y: ${y}, z: ${z}`;
    };
  };
}
console.log(multiply6(3)(4)(5));
console.log("---------------------------------");

const multiplyTwo = (x, y) => {
  return x * y; //이 함수를 일반함수로 변형이 되나? = 된다
};

//multiplyTwo -> 일반함수로 변형
const multuplyTwo2 = function (x, y) {
  return x * y;
};
console.log(
  `multiplyTwo 함수 : ${multiplyTwo(4, 5)}, multuplyTwo2 함수 : ${multuplyTwo2(4,5)}`
);
console.log("---------------------------------");
//함수를 선언하는 데는 굉장히 여러가지 문법을 조금은 알고 있어야 한다.

//argument를 이용
const multiplyThree = function (x, y, z) {
  console.log(arguments); //argument는 뭐다? 실제 x,y,z에 입력되는 값
  return x * y * z;
};
console.log(multiplyThree(4, 5, 6));
console.log("---------------------------------");
//[Arguments] { '0': 4, '1': 5, '2': 6 } -> 0번에는 4, 1번에는 5, 2번에는 6이라는 값을 넣었다고 표현
//그렇기에, 함수에서 argument 키워드를 사용하면, 우리가 입력한 argument 값을 순서대로 반환 받을 수 있다.

//값을 지정해서 받는게 아닌, 원하는 만큼 외부에서 계속 입력
const multuplyAll = function (...arguments) {
  //...arguments -> 무한하게 파라미터를 받는다.
  //reudce 함수 예시, 다음 시간에 배움
  return Object.values(arguments).reduce((a, b) => a * b, 1);
  //arguments의 object에 있는 value 값들을 전부 곱해서 반환해준다.
};
console.log(multuplyAll(3, 4, 5, 6, 7, 8, 9, 10));
console.log("---------------------------------");

//즉시 실행 함수  - immediately invoked function
(function (x, y) {   //이름이 없으면 안된다. 어떻게든 함수에 이름을 정해야한다.  
  console.log(x * y);
  //그러나 정의와 동시에 실행시키고 싶다면?
  
})(4,5)  //괄호를 포함시키면, 실행이 된다.

console.log(typeof multiply);
console.log(multiply instanceof Object);  //좌측에 있는게 오른쪽과 같은타입인지? -> 멀티플라이 함수가 object냐?


