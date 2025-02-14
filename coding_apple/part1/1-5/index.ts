function 함수(x?: number): number {
  return x * 2;
}
함수(30);

function 함수2(x: number | undefined): number {
  return x * 2;
}
함수2(30);
