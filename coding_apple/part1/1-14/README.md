## 💡 part1-14 Object에 타입지정하려면 interface 이것도 있음

### 🔹 interface

- extends로 복사가능
- 중복선언 가능

```javascript
interface Student {
  name: string;
}

interface Student {
  name: score;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };
```
