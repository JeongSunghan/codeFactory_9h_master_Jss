/**
 * Getter and Setter
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    /**
     * Getter
     * 1. 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2. private한 값을 반환할 때
     */
    get nameAndYear() {
        return `${this.name}-${this.year}`;
        //getter = 값을 가져올 때
    }

    //setter = 값을 새로 저장할 때
    //set은 무조건 파라미터를 '하나' 받아야 한다.
    set setName(name) {
        //현재 인스턴스 name에다가 name을 저장
        //참고로 this.name은 set의 name아닌 IdolModel의 name
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003) 
console.log(yuJin);
//함수로 정의했지만, get 키워드를 입력하는 순간 하나의 변수처럼, 오브젝트의 key 값처럼 아래와 같이 사용가능
console.log(yuJin.nameAndYear);     // 안유진-2003 로 출력
//console.log(yuJin.nameAndYear()); TypeError: yuJin.nameAndYear is not a function -> 함수가 아니다 라는 typeError 발생
console.log('-------------------------');

//setter 사용
yuJin.setName = '장원영';
console.log(yuJin);     //IdolModel { name: '장원영', year: 2003 } 이름이 변경되었다. => 근데 setter 가 없어도 위에처럼 name을 '장원영'으로 바꾸면 변경되지 않냐?
//나중에 배우지만 프로퍼티를 프라이빗으로 만들었을 때는 직접적으로 액세스가 불가능하다.
//그래서 setter를 이용해서 바꾸게된다. -> setter는 값을 지정하는 역할
//setter는 getter와 마찬가지로, 특정 프로퍼티를 액세스하는 것처럼 불러올 수 있으며, setName = 이후에 들어오는 값이 set setName(name) 파라미터 안에 입력된다
//그런데 setter같은 경우 많이 사용하지 않는다. 이유는 immutable programming을 많이하기 때문이기도 하지만, 정의한 값을 변경하기 때문에 선호하지 않는 형태

//getter, setter가 빛나는 상황
class IdolModel2 {
    //private란? -> 실제로 값을 저장은 하는데, 외부에서 엑세스를 못하는 값
    #name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
        //#이 들어가는 문법은 ES7에 나오는 문법 -> ES7 지원되는 엔진만 사용가능
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yuJin2= new IdolModel2('안유진', 2003)
console.log(yuJin2);
// IdolModel2 { year: 2003 } => year 값만 출력이 되었다. 그럼 어떻게 가져오나? : getter 활용
console.log(yuJin2.name);
console.log('-----------------');
//안유진 -> 정상적으로 name이 출력
//private는 외부에서 액세스가 불가하지만, getter를 이용해 값을 가져올 수 있다.

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);   //코드팩토리 로 정상변경

//getter와 setter를 가장 많이사용하는 경우는 private property가 존재할 때, 그러나 setter는  immutable programming로 인해 사용하지 않는걸 추천.

