export function fatorial(n: number): number {
  if (n < 0) throw new Error("Fatorial não definido para números negativos");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
