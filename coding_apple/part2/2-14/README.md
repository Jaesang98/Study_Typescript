## 💡 part2-14 implements 키워드

### 🔹 implements

- class가 특정 필드와 함수를 가지고 있는지 확인하고 싶은 경우 간혹 사용한다
- interface에 들어있는 속성을 가지고 있는지 확인만함

```javascript
interface CarType {
  model: string;
  price: number;
}

class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Car("morning");
```
