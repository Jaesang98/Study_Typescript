## 💡 part1-6 타입 확정하기 Narrowing & Assertion

### 🔹 Narrowing

- `typeof`를 통해 타입을 확인한다

```javascript
if (typeof x === 'string')
```

### 🔹 Assertion

- 타입 덮어쓰기

```javascript
function 내함수(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

```
