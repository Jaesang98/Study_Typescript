## 💡 part2-9 React + TypeScript 사용할 때 알아야할 점

### 🔹 설치 및 사용

- vite로 실행 하여 설정

```jsx
//요소 타입지정
let 박스: JSX.Element = <div></div>;

//props 타입지정
type AppProps = {
  name: string,
};
function App(props: AppProps): JSX.Element {
  return <div>{message}</div>;
}
```
