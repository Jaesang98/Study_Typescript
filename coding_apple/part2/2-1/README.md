## 💡 part2-1 함수 rest 파라미터, destructuring 할 때 타입지정

### 🔹 rest 파라미터

- 많은 파라미터가 들어올 수 있다 라는 축약어

```javascript
function 함수(...a :number[]) {
  console.log(a) //[1,5,2,4,1,5,3]
}
함수(1,5,2,4,1,5,3)
```

### 🔹 destructuring

- 자료들을 변수로 쉽게 빼서 사용가능

```javascript
let [변수1, 변수1] = ['안녕', 100]
```