/**
 * Class (Method)
 */


class IdolModel {
    name;
    year;
    //메소드 사용 방법
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    //원래 function 을 정의해야하지만, class 안에서는 이름만 작성

    sayName() {
        return `안녕하세요 ${this.name} 입니다.`
    }
    
};


const yuJin = new IdolModel();
console.log(yuJin);
console.log('------------------------')


const yuJin2 = new IdolModel('안유진2', 2003);
console.log(yuJin2);

const gauel = new IdolModel('가을', 2002)
console.log(gauel);
const ray = new IdolModel('레이', 2004)
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004)
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004)
console.log(liz);
const eseo = new IdolModel('이서', 2007)
console.log(eseo);

console.log(yuJin2.sayName());   //안녕하세요 저는 안유진 입니다. 정상출력 -> 문제는 : sayName 함수를 실행했을 때 알맞는 이름을 출력하고 싶다.
//return `안녕하세요 ${this.name} 입니다. 이런식으로 바꾸면 현재 실행한 객체에 맞는 이름을 출력
console.log(wonYoung.sayName());    // 안녕하세요 장원영 입니다. -> 현재 객체에 맞는 name을 출력

console.log(typeof IdolModel);  //함수 타입
console.log(typeof yuJin);  //오브젝트

/**
 * 알게 된 저점
 * class는 함수이다. -> 왜 함수인지는 다음시간에 자세히 배울 예정
 * class로 생성한 인스턴스는 object(객체)다.
 */






