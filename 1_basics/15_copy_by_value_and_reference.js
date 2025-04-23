/**
 *  copy by value : 값에 의한 전달
 *  copy by reference : 참조에 의한 전달
 * 
 *  1) 기본적으로 모든 primitive 값은 copy by value 이다.
 *      - primitive : 오브젝트 빼고 생성되는 모든 다른 데이터 타입들
 *  2) 객체는 copy by reference 다.
 */

//값을 그대로 가져오는 형태를 copy by value
let original = '안녕하세요';
let clone = original;
console.log(`original : ${original} / clone : ${clone}}`);   //둘 다 안녕하세요 출력

clone += ' 안유진 입니다.';
console.log('--------------------------');
console.log(`original : ${original} /  clone : ${clone}}`); //clone만 값이 변경되었다.

//그렇다면 copy by reference는 어떻게 되냐?
let originalObj = {
    name: '안유진',
    group: '아이브',
};

let cloneObj =  originalObj;
console.log('originalObj:', originalObj, 'cloneObj: ', cloneObj);
console.log('--------------------------');

originalObj[`group`] = '코드팩토리';
console.log('originalObj:',originalObj, 'cloneObj: ',cloneObj);
console.log('--------------------------');
//둘 다 그룹이 '코드팩토리'로 변경 되었다. 엥? -> 이게 copy by reference 라는 기능이다. reference를 그대로 가져온다.

console.log('value와 reference 참 거짓 비교');
console.log(original === clone); //false
console.log(originalObj === cloneObj);  //true
console.log('--------------------------');
//의문 : 그럼 originalObj, cloneObj의 key, value가 같으니 true가 아닌가 -> 그래서 그런게 아니다.

//확인
originalObj = {
    name: '최지호',
    group: '코드팩토리',
};

cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj);  //false : key와 value의 값들이 다 같다고해서 같은 값이라고 인식하는게 아니다.
console.log('--------------------------');  //정확한 정리를 위해 png로 대체

//아래 과정은 이해없이 실행금지! -> 주석을 적어서 답과 이유 작성 후 실행해보기
const yuJin1 = {
    name: '안유진',
    group: '아이브',
};

const yuJin2 = yuJin1;

const yuJin3 = {
    name: '안유진',
    group: '아이브',
};

//주석으로만 답과 이유 생각하고 적기
console.log(yuJin1 === yuJin2);     //true : 같은 메모리 주소를 공유
console.log(yuJin1 === yuJin3);     //false : 둘이 가르키는 메모리 주소가 다름 
console.log(yuJin2 === yuJin3);     //false : yujun1과 2는 같은 메모리 주소를 본다, 따라서 1과3이 false이므로 당연히 2와 3도 false
console.log('--------------------------');


/**
 * Spread Operator  복습 -> Array에만 존재하는게 아닌, Object에도 존재한다.
 */

const yuJin4 = {
    ...yuJin3
};
console.log(yuJin4);    //값이 그대로 복사된다.
console.log('--------------------------');
//그럼 Spread Operator를 쓰면 copy by value일까? copy by refernce 일까?
//답 : copy by value : 'Object를 새로 선언'을 했기 때문이다.

console.log(yuJin4 === yuJin1);     //false
//Spread Operator 통해 값을 복사 하면은 메모리 공간은 다른 곳을 가르킨다.
//따라서, spread operator를 쓰면, 똑같은 값을 갖고 있는 object나 array를 copy by value로 완전히 새로운 값으로 복사한다.

//spread를 하고서 값을 추가 할 수 있다.
const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);
//Spread Operator 잘 다뤄야 하는 이유는 `순서가 중요!!`
const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3
    //yujin3는 원래 name이 '안유진'이라는 값을 갖고있다. 그렇다면 위에 name을 넣어준다면?
};
console.log(yuJin6);    //name이 변경되지 않음 
//순서가 중요 : name을 선언해도, 밑에서 스프레드를 했고, 스프레드에서 name 값이 있었기 때문에 yuJin3에 있는 name 키 값으로 
