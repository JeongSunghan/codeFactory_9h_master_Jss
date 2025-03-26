/**
 *  Operators - 연산자
 */

const { SassMap } = require("sass");

/**
 *  산술 연산자
 *
 *  덧셈, 뺄셈, 곱셈, 나눗셈, 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);
console.log("-------------------");

// 증가와 감소
let number = 1;
number++;
console.log(number);

number--;
console.log(number);
console.log("-------------------");

// 연산자의 위치
let result = 1;
console.log(result);
console.log("-------------------");

result = number++;
console.log(result, number); //result는 그럼 2?
// result는 1 number는 2 라는 결과가 나왔다.
// number는 2로 증가 되었지만, number를 증가시키기 전 result가 number의 값을 먼저 저장한 것, ++를 뒤에다 작성하면 다른 오퍼레이터가 먼저 실행(저장)
// 그 이후 값이 증가 또는 감소 오퍼레이터가 실행이 된다.

result = number--;
console.log(result, number);
console.log("-------------------");

// 그럼 순서를 바꿀때는 반대로 작성 -> 하지만 이런 경우는 거의 없다.. 하는 순간 선임에게 뒤통수 적립
result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);
console.log("-------------------");

/**
 *  숫자 타입이 아닌 타입에 +, - 사용한다면?
 */

let sample = '99';

console.log(+sample);   //99
console.log(typeof +sample, typeof sample); //number, sample

sample = true;
console.log(+sample); //1
console.log(typeof +sample);    // number

sample = false;
console.log(+sample); //0
console.log(typeof +sample);    // number
// 추후 1,0 을 true, false로 할 수 있다고 한다. 하지만 역시나 선임 뒤통수 한대 적립

sample = '안유진';
console.log(+sample);   //NaN = Not a Number

sample = '99';
console.log(-sample);   //-99
console.log("-------------------");


/**
 *  할당 연산자 (assignment operator)
 * 
 *  계산 후 값을 저장 한다.
 */

number = 100;
console.log(number);

//operator에 =을 추가해주면 계산 후 그 값을 저장
number += 10;       
console.log(number);

number -= 10;       
console.log(number);

number *= 10;       
console.log(number);

number /= 10;       
console.log(number);

number %= 10;       
console.log(number);
console.log("-------------------");

/**
 *  비교 연산자 = 개발의 꽃
 * 
 *  1) 값의 비교
 *  2) 값과 타입의 비교
 */

// 1) 값의 비교 (==)
console.log(5 == 5);    //true
console.log(5 == '5');  //true
console.log(0 == '');   //true
console.log(true == 1); //true
console.log(false == 0); //true
console.log(true == '1'); //true
// 위의 경우 굉장히 이상하기에 JS 에서는 비교 연산자가 하나 더 있다.
console.log("-------------------");

/// 2) 값과 타입의 비교 (===)
console.log(5 === 5);   //true
console.log(5 === '5');  //false
console.log(0 === '');   //false
console.log(true === 1); //false
console.log(false === 0); //false
console.log(true === '1'); //false
console.log("-------------------");

// 같지 않다의 비교 (!=)
console.log(5 != 5);    //false
console.log(5 != '5');  //false
console.log(0 != '');   //false
console.log(true != 1); //false
console.log(false != 0); //false
console.log(true != '1'); //false
console.log("-------------------");

// 같지 않다의 타입 비교 (!==)
console.log(5 !== 5);    //false
console.log(5 !== '5');  //true
console.log(0 !== '');   //true
console.log(true !== 1); //true
console.log(false !== 0); //true
console.log(true !== '1'); //true
console.log("-------------------");


/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);
console.log("-------------------");

/**
 *  삼항 조건 연산자 (ternary operator)
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
console.log("-------------------");

/**
 *  논리 연산자
 * 
 *  1) &&   (and)
 *  2) ||   (or)
 */


// &&(and) 조건은 모두 true 여야 true를 반환
console.log(true && true);  //true
console.log(true && false, false && true); //false
console.log(false && false); //false
console.log("-------------------");

// ||(or) 조건은 하나만 true여도 true를 반환
console.log(true || true);  //true
console.log(true || false, false || true); //true
console.log(false || false); //false
console.log("-------------------");

console.log(10 > 1 && 20 > 2);  //true
console.log(10 < 1 && 20 > 2);  //false
console.log(10 < 1 && 20 < 2);  //false
console.log("-------------------");
console.log(10 > 1 || 20 > 2);  //true
console.log(10 < 1 || 20 > 2);  //true
console.log(10 < 1 || 20 < 2);  //false
console.log("-------------------");

/**
 *   단축평가 (short circuit evaluation)
 *      
 *      &&를 사용했을 떄 좌측이 true면 우측 값 반환
 *      &&를 사용했을 떄 좌측이 false면 좌측 값 반환
 *      ||를 사용했을 떄 좌측이 true면 좌측 값 반환
 *      ||를 사용했을 떄 좌측이 false면 우측 값 반환
 * 
 */

console.log(true || '아이브');  //true
console.log(false || '아이브'); //아이브
console.log(false && '아이브'); //false
console.log(true && '아이브');  //아이브

//이 기능의 장점이자 단점, 끊임없이 연결이 가능하다
console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log("-------------------");

// 지수 연산자
console.log(2 ** 2);    //2^2 2에 2승
console.log(10 ** 3);

// null 연산자
let name;
console.log(name);

name = name ?? '코드팩토리';    //좌측 값이 null 혹은 undefined 일 때, 우측 값을 반환
console.log(name);

name = name ?? '아이브';
console.log(name);  //코드팩토리 출력 -> name에 이미 코드팩토리가 저장되었기 때문이다.
console.log("-------------------");

//name = name ?? '코드팩토리' 리팩토링
let name2;
name2 ??= '코드팩토리';
console.log(name2);
