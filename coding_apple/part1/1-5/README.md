## 💡 part1-5 함수에 타입 지정하는 법 & void 타입

### 🔹 함수

```javascript
//ex)
function 함수(x?: number): number {
  return x * 2;
}
함수(30);
==
function 함수2(x: number | undefined): number {
  return x * 2;
}
함수2(30);

```
