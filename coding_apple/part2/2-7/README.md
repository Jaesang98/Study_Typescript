## 💡 part2-7 타입도 import export 해서 씁니다 그리고 namespace

### 🔹 import

- `type`또한 `import export`가능

### 🔹 namespace

- `TypeScript` 타입변수 숨기기 문법
- 옛날 문법, 지금은 안씀

```javascript
namespace MyNamespace {
  export type NameType = number | string;
}

MyNamespace.NameType
```
