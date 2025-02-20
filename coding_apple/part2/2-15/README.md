## 💡 part2-15 object index signatures

### 🔹 index signatures

- 모든 타입의 속성을 정의

```javascript
interface StringOnly {
  [key: string]: string;
}
```

### 🔹 recursive

- object자료가 4중첩 5중첩 X중첩되어도 대응가능

```javascript
interface Mytype {
  "font-size": Mytype | number;
}

let obj: Mytype = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};
```
