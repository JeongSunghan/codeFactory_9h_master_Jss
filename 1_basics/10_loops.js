/* Loops 
    1) for
    2) while
*/

// 3가지의 섹션을 ;으로 나눈다.(1번 섹션 - 기준 변수; 2번 섹션 - 조건; 3번 - for문이 한번 실행될때 마다 어떤 행동을 취할건지)
for (let i = 0; i < 10; i ++) {
    //i = 0 이라는 변수를 선언, i가 10이 될때까지 loop을 실행할건데, 실행 될 때마다 i를 1씩 증가를 표현
    console.log(i); // 0 ~ 9 까지 출력, 10은 10보다 작은게 아닌 같기에 그 이후 반복문은 종료
}
console.log("--------------------------");

for (let i = 10; i > 0; i--) {
    console.log(i);    
}
console.log("--------------------------");

//loop 2개 중첩 사용
for(let i = 0; i < 3; i++) {
    for(let j = 3; j > 0; j--) {
        console.log(i, j);            
    }
}
console.log("--------------------------");

// *을 이용해서 6x6의 정사각형을 출력해라
let squaere = '';
for(let i = 0; i < 6; i++) {    
    for(let j = 0; j < 6; j++) {
        squaere += '*';       
    }
    squaere += '\n';
}
console.log(squaere);
console.log("--------------------------");


/**
 * for..in
 */

const yujin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

for(let key in yujin){
    console.log(key);    
}
console.log("--------------------------");

const iveMemberArray = ['안유진','가을','레이','장원영','리즈','이서'];
for(let key in iveMemberArray) {    
    console.log(`${key} : ${iveMemberArray[key]}`);    
}
// for in loop을 object에서 사용하면 key 값을, 배열에서는 index값을 가져올 수 있다.
console.log("--------------------------");

/**
 * for...of => array에서 사용
 */

for (let value of iveMemberArray) {
    console.log(value);    
    //값을 가져온다.
}
console.log("--------------------------");

/**
 * While
 */

let number = 0;
while(number < 10) {
    number++;
    console.log(number);    
}
console.log("--------------------------");

/**
 * do..while -> 선임한테 뒤통수 맞는, 햇갈리는, 잘 안씀
 */

number = 0;

do {
    number++;
} while(number < 10);

console.log(number);
console.log("--------------------------");

/**
 * 그럼 두 while의 다른점은?
 * 
 *  while =>  조건을 먼저 판단을 한 다음 조건에 true가 반환이 되면 body 실행
 *  do while => 먼저 body를 실행하고, 조건에 해당하는지 판단한다.
 */


/**
 * break = 깨트리다.
 */

for(let i = 0; i < 10; i++) {
    //break 사용법
    if(i === 5) {
        break;
        //break가 실행되면 반복문이 종료된다.
    }
    console.log(i);    
}
console.log("--------------------------");


number = 0;
while(number < 10) {

    if(number === 5) {
        break;        
    }    
    
    number++;
    console.log(number);    
}
console.log("--------------------------");

/**
 * continue 
 */
for(let i = 0; i < 10; i++ ) {

    if(i === 5) {        
        continue;
    }

    console.log(i);
}
console.log("--------------------------");

number = 0;
while(number < 10) {
    number ++;

    if(number === 5) {
        continue;
    }

    console.log(number);
}