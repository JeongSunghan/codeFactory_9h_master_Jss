/**
 *  Data Types
 * 
 *  여섯개의 Primitive Type 과 한개의 오브젝트 타입이 있다.
 * 
 *  1) Number (숫자)
 *  2) String (문자열 - 문자를 여러개로 묶은)
 *  3) Boolean (참/거짓)
 *  4) undefined (정의되지 않은 상태)
 *  5) null (값이 정의되지 않은 상태, undefined 와 조금 다름)
 *  6) Symbol (심볼)
 * 
 *  1-1) Object (객체) - 자바스크립트의 지옥
 *       Function, Array, Object 등등
 */

//number Type
const age = 32;
const tempature = -10;
const pi= 3.14;
console.log(typeof age, typeof tempature, typeof pi); //typeof - 변수가 어떤 타입인지 알아봄
console.log('__________________________');

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity, typeof nInfinity);
console.log('__________________________');

//string Type
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

//큰 따옴표를 이용해 작은 따옴표 출력
const ive = "'아이브', '안유진' ";
console.log(ive +"= '작은 따옴표'가 표시가 된다.");

/**
 * Template Literal
 * 
 *  1) newLine = \n
 *  2) tab = \t
 *  3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력
 */

const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);

const iveYuJin2 = '아이브\t안유진2';
console.log(iveYuJin2);

const backSlash = '아이브\\안유진3';
console.log(backSlash);

const iveYuJin3 = `아이브ㅑ '" /////// 아라라랄 장워여영`;
//`Template Literal를 사용하면 안에 타이핑한 문구가 그대로 출력` 
console.log(iveYuJin3);
console.log(typeof iveYuJin3);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);

/**
 * Boolean Type
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue, typeof isFalse);

/**
 *  undefined
 * 
 *  사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 *  직접 undefined 값을 초기화하는 건 지양할 것 = 자바스크립트에서는 미친놈임
 * 
 */


/**
 *  null Type
 * 
 *  undefined와 마찬가지로 값이 없다는 뜻이나
 *  JS에서는 개발자가 명시적으로 없는 값을 초기화할 때 사용한다.
 * 
 */

let init = null;
console.log(init);  //null
console.log(typeof init);   //object - 엥, primitive 인데 왜 object? => 버그라고 한다.. 개발자도 ㅇㅈ

//  실제적으로 값이 없다는 것을 명시적으로 인지 시키는 경우 = null
//  선언하고 값을 배정하지 않았다 라는 것은 undefined

/**
 *  Symbol Type
 * 
 *  유일무이한 값을 생성할 때 사용한다.
 *  다른 primitive 값들과 다르게 Symbol 함수를 호출해서 사용
 */

const test1 = '1';
const test2 = '1';
console.log(test1 === test2);   //true

const symbol1 = Symbol('1')
const symbol2 = Symbol('1')
console.log(symbol1, symbol2);
console.log(symbol1 == symbol2);   //false 
// 왜? = Symbol 같은 경우에는 우리가 어떤 값을 이 안에다 넣더라도 이 값은 보존이 되지만, 
// 무조건 유일무이한 값이 인식돼서 이 안에 들어가게 된다.


/**
 *  Object Type
 * 
 *  Map
 *  - key : value 의 쌍으로 이루어져 있다.   
 */

const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색', 
};

console.log(dictionary);

// dictionary의 key에 대한 value를 알고 싶을 때
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

/**
 *  Array Type
 *  
 *  값을 리스트로 나열 할 수 있는 타입
 */

const iveMemberArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',    
];

console.log(iveMemberArray);    //리스트로 값이 출력
/**
 *  index
 * 
 *  0부터 시작하여 1씩 올라간다 
 */

console.log(iveMemberArray[0]); //안유진 출력
//0 안유진, 1 가을, 2 레이, 3 장원영, 4 리즈, 5이서 로 출력

iveMemberArray[0] = '코드팩토리';    // 안유진 -> 코드팩토리로 변경된다
console.log(iveMemberArray); 

/**
 *  statice typing - 변수를 선언할 때, 어떤 타입의 변수를 선언할지 명시 (C)
 * 
 *  dynamic typing - 변수의 타입을 명시적으로 선언하지 안혹, 값에 의해 타입을 "추론" 한다.
 *  JS => dymanic typing 이다.
 */

//function은 다룰게 너무 많기에 추후로








