## 💡 part1-8 Literal Types로 만드는 const 변수 유사품

### 🔹 Literal Types

- 특정 문자만 들어올 수 있음
- 엄격한 관리로 버그방지 쉬움

```javascript
let 이름: "park";
이름 = "nam"; //에러
```

### 🔹 Literal Types문제점

- 리터럴 타입은 어떤 자료만 들어올수 있다는 것이 아닌 어떤 타입만 들어올 수 있다는 뜻
- 그래서 값이 같다고 하더라도 에러가 날 수 있다
- 해결법은 as const를 사용 (object value값을 타입으로 지정)
- 대신 이렇게하면 readonly가 되어 자료수정이 불가능

```javascript
let 자료 = { name: "kim" };

function 함수(a: "kim") {}

함수(자료.name); //에러남
```
