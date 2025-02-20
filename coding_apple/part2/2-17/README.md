## 💡 part2-17 조건문으로 타입만들기 & infer

### 🔹 타입 조건식

- 삼항연산자로 검사

```javascript
type Age<T> = T extends string ? string : unknown;  //T가 string을 가지고 있는지 확인
let age : Age<string> //age는 string 타입
let age2 : Age<number> //age는 unknown 타입
```

### 🔹 infer

- 타입을 추출

```javascript
type Person<T> = T extends infer R ? R : unknown;
type 새타입 = Person<string> // 새타입은 string 타입입니다
```
