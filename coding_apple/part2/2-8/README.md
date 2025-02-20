## 💡 part2-8 타입을 파라미터로 입력하는 Generic

### 🔹 Generic

- 파라미터로 타입을 입력하는 함수

```javascript
function 함수<Type>(x: unknown[]) {
  return x[0];
}
let a = 함수<number>([4, 2]);
let b = 함수<string>(['4', '2']);
```


### 🔹 파라미터 제한두기

```javascript
function 함수<Type extends number>(x) {
  return x - 1;
}
let a = 함수<number>(2);
```
