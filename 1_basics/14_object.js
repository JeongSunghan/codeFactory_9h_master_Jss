/**
 * Object (객체) -> 자바스크립트에서 굉장히 중요한 데이터 타입
 * 웬만한 것들은 모두 객체를 사용해서 데이터 구조를 이룬다.
 */

// key : value pair
let yuJin = {
  //객체 선언
  name: "안유진",
  group: "아이브",
  //여기까지는 배운내용, 그러나 여기에 함수가 추가가 가능하다 -> method : 오브젝트 안에 함수를 정의
  dance : function () {
    //key : 댄스, value : functtion
    //return '안유진이 춤을 춥니다.'; -> 변경 전
    return `${this.name}이 춤을 춥니다.`; //옳은 변경 -> 함수가 정의되어 있는 object를 가져 올 수 있다.
  },
};
console.log(yuJin);     //{ name: '안유진', group: '아이브', danece: [Function: danece] } 정의한 대로 object가 출력
console.log(yuJin.name);
console.log(yuJin['name']);
console.log('-------------------------');

const key = 'name';
console.log(yuJin[key]);
console.log('-------------------------');

console.log(yuJin.dance()); //dance는 함수이므로 실행을 해야 반환값을 받으니 () 열고 닫아주기
console.log('-------------------------');

/**
 *  dance 함수의 아쉬운 점 : 유진이라는 오브젝트안에 `안유진`의 값이 이미 존재한다, 그러나 중복으로 return '안유진'이 있다. 
 *  그럼 어떻게? : this라는 키워드로 넣는다. -> OOP(객체지향 프로그래밍)이 되는 언어는 대부분 this 키워드가 존재한다
 *  그러나 js에서의 this는 의미하는 바가 조금 다르다. 위의 yuJin의 경우에는 현재 객체를 가르킨다.
 *  따라서 this는 함수가 정의되어 있는 yujin 객체를 가리키게 된다.
 */


// 객체를 선언할 때 변수를 사용하는 방법
const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';


const yuJin2 = {
    //name 이라는 값을 넣고 싶은데, 값을 변수로 들고 있다면 어떻게 key로 사용할 수 있나?
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance() {
        return `${this.name}이 춤을 춥니다2.`
    }
}
console.log(yuJin2.dance());
console.log('-------------------------');

// 값을 바꾸기 복습
yuJin2['group'] = '코드팩토리';
console.log(yuJin2);    //그룹이 아이브 -> 코드팩토리로 변경
console.log('-------------------------');

//그렇다면 없는 property, 존재하지 않는 key 값을 넣는다면?
yuJin2['englishName'] = 'An Yu Jins';
console.log(yuJin2);
console.log('-------------------------');
/*  존재하지 않는 키를 넣어보니, 새로 생성한 모습
 {
  name: '안유진',
  group: '코드팩토리',
  dance: [Function: dance],
  englishName: ''
}
 */

delete yuJin2['englishName'];
console.log(yuJin2);
console.log('-------------------------');
//이상한 점 : const로 선언하면 변경할 수 없는데 왜 변경됬는가? -> 다음시간에 정확하게 학습예정
//Object는 한가지의 룰이 있다.


/**
 *  객체의 특징
 *      1) const로 선언할 경우 객체 자체를 변경 할 수 없다.
 *      2) 객체 안의 property나 method는 변경 할 수 있다.
 */

const wonYoung = {
    name : '장원영',
    group : '아이브',
}
console.log(wonYoung);
console.log('-------------------------');

//객체 특징 1번 : 만약 원영은 새로운 객체로 변경할 경우? -> 에러발생
//wonYoung = {};      //TypeError: Assignment to constant variable.

//객체 특징 2번
wonYoung['group'] = '아이브2';
console.log(wonYoung);
console.log('-------------------------');

//모든 key 값 가져오기 : Object.keys()
console.log(Object.keys(wonYoung));     //[ 'name', 'group' ] -> 값들이 배열로 반환되는 것을 볼 수 있다.

//모든 value 값 가져오기
console.log(Object.values(wonYoung));   //[ '장원영', '아이브2' ] -> key와 동일
console.log('-------------------------');

//Bounus : 최근에 생긴 문법으로 조금 더 빠르게 객체 선언
const name = '안유진';    

const yuJin3 = {
    //name의 키 값과, 변수의 이름이 같은 경우 = 하나만 입력\    
    name,   // name: name, 과 같은 맥락
};
console.log(yuJin3);




