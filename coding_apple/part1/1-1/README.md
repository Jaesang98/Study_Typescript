## part1-1

### 🔹 Typescript란

- Javascript + Type문법
- 에러메시지 퀄리티가 높음

### 🔹 설정 및 실행

- nodejs, vscode 설치

```javascript
//powershell
npm install -g typescript

//tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs"
  }
}

//powershell
tsc -w
```

### 🔹 Typescript 사용

```javascript
let 문자열: string = "string";
```
