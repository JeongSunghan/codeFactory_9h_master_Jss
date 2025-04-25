//에러 잡기
function runner() {
  try {
    //try 안에 실행하고 싶은 코드를 작성
    console.log("Hello");

    //throw new Error("큰 문제가 생겼습니다.");

    console.log("Code Factory");
    //catch 이후 값을 하나 받는다.
  } catch (e) {
    //보통 e라고 많이 작성
    console.log("---catch---");
    /**
     *  Hello
        ---catch---
        Error: 큰 문제가 생겼습니다.
        위와 같이 콘솔에 출력
        1. hello 정상출력
        2. error 발생 및 출력
        3. catch 출력
        즉, 에러를 던지면 바로 catch 문으로 간다. -> 실제 에러값을 첫 번째 파라미터에 받아서 활용이 가능하다.
     */
    console.log(e);
    //catch 이후 위의 log를 없애면, console.log("---catch---"); 만 출력된다. 이 error 내용을 사용 안할려면 사용을 안하게 할 수 있다.
    //즉, try-catch는 error 던진거를 잡을때 사용한다.
  } finally {
    //마지막 키워드 -> finally는 언제사용하냐? : try에서 에러가 났든 안났든 무조건 실행하는 코드를 finally에 작성
    //만약, try에서 에러가 없다면 catch로 안나간다. 하지만 finally는 실행이 된다.
    console.log(`---finally---`);    
    /**
     *  Hello
        ---catch---
        Error: 큰 문제가 생겼습니다.
        ---finally---
        finally가 정상 작동한다.
     */

    //threow 내용을 없애도 finally는 정상작동
    /**
     *  Hello
        Code Factory
        ---finally---
     */
  }
  //그런데 여기서 finally 키워드는 써도 되고 안써도 되고 옵션이다 라고 알면된다.\
  //기본기 종료 OOP 프로그래밍으로 넘어갑니다.
}
runner();
