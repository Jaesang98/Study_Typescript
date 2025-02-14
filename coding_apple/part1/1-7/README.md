## 💡 part1-7 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly

### 🔹 타입 변수지정

- 타입을 변수로 지정할 수 있다
- 변수명은 대문자로 시작

```javascript
type Animal = string | number | undefined;
let 동물: Animal = 123;

type Animal2 = { name: string, age: number };
let 동물2: Animal2 = { name: "kim", age: 20 };
```

### 🔹 const

- `const` 변수는 등호로 재 할당을 막는다
- `object`수정은 자유롭다
- `readonly` 사용 시 수정이 안됨

```javascript
type Animal ={
  readonly name : string
}

```

### 🔹 type 키워드 합치기

- 여러개의 `type`변수는 `&`를통해 `extend`할 수 있다

```javascript
type a = string;
type b = string;
type c = a & b;
```
