## 💡 part2-12 외부 파일 이용시 declare & 이상한 특징인 ambient module

### 🔹 declare

- 다른데서 사용된 변수를 재정의할 때 사용

```javascript
declare let a;

//글로벌 변수
declare global {
  type Dog = string
}
```

### 🔹 ts파일 특징

- 모든 ts파일은 ambient module(글로벌모듈)
- 글로벌로 만들지 않으려면 `export`
