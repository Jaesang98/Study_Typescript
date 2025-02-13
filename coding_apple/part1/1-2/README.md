## 💡 part1-2 Typescript 컴파일시 세부설정 (tsconfig.json)

### 🔹 tsconfig

- 타입스크립트 ts 파일들을 .js 파일로 변환할 때 어떻게 변환할 것인지 세부설정
- [자세한내용](https://www.typescriptlang.org/tsconfig)

```javascript
//tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs"
  }
}
tsc -w
```
