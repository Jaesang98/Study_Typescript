## 💡 part2-11 array 자료에 붙일 수 있는 tuple type

### 🔹 tuple type

- 자료의 순서와 위치를 엄격하게 지정이 가능

```javascript
let 멍멍이: [string, boolean];
멍멍이 = ["dog", true];

//rest parameter
function 함수(...x: [string, number]) {
  console.log(x);
}
함수("kim", 123); //가능
함수("kim", 123, 456); //에러
함수("kim", "park"); //에러
```
