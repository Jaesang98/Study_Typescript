## 💡 part1-10 타입스크립트로 HTML 변경과 조작할 때 주의점

### 🔹 narrowing

- narrowing 하는 방법 5가지

```javascript
// 방법1 narrowing
let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반갑소";
}

// 방법2 instanceof
let 제목 = document.querySelector("#title");
if (제목 instanceof Element) {
  제목.innerHTML = "반갑소";
}

// 방법3 assertion
let 제목 = document.querySelector("#title") as Element;
제목.innerHTML = "반갑소";

// 방법4 optional chaining
let 제목 = document.querySelector("#title");
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반갑소";
}

// 방법5 strict 설정 false
 "strictNullChecks": false
```

### 🔹 각 태그 HTMLElement

- a 태그는 HTMLAnchorElement 등등..

```javascript
let 링크 = document.querySelector("#link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}
```
