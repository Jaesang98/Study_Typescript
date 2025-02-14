## 💡 part1-4 타입 미리 정하기 애매할 때 (typescript union type, any, unknown)

### 🔹 union

```javascript
//ex)
let 회원: string | number = "kim";
let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 123 };
let 이름: any = 123;
let 이름2: unknown = "a";
```
