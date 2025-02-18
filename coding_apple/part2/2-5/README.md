## 💡 part2-5 class에서 사용가능한 protected, static 키워드

### 🔹 protected
- `class`에서 쓰는 `protected`키워드가 붙으면 `extend된 class{}`안에서 사용가능

```javascript
class User {
  protected x = 10;
}

class NewUser extends User {
  doThis(){
    this.x = 20;
  }
}
```

### 🔹 static
- `static`키워드 붙으면 부모`class`에 직접 부여됨 (자식에게 안물려줌)

```javascript
class User {
  x = 10;
  y = 20;
}

let john = new User();
john.x //가능
User.x //불가능

class User {
  static x = 10;
  y = 20;
}

let john = new User();
john.x //불가능
User.x //가능
```