## 💡 part2-2 Narrowing 할 수 있는 방법 더 알아보기

### 🔹 in 연산자
- 별 쓸모는 없어보임

```javascript
type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim
  }
  return animal.fly
} 
```