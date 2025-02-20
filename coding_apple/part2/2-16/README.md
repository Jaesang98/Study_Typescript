## 💡 part2-16 object 타입 변환기 만들기

### 🔹 keyof

- 키값을 전부 가져옴

```javascript
interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person;
let a :PersonKeys = 'name'
```

### 🔹 타입 변환기

- 키값을 전부 가져옴

```javascript
type Car = {
  color: boolean,
  model : boolean,
  price : boolean | number,
};

type TypeChanger <MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = TypeChanger<Car>;

let obj :새로운타입 = {
  color: 'red',
  model : 'kia',
  price : '300',
}
```
