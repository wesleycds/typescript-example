


export function quadradoComFor(arr: number[]): number[] {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(arr[i] * arr[i]);
  }
  return resultado;
}

export function quadradoComForEach(arr: number[]): number[] {
  const resultado: number[] = [];
  arr.forEach(num => resultado.push(num * num));
  return resultado;
}

export function juntarStrings(arr: string[]): string {
  return arr.join(" ");
}


export function ordenarArray(arr: string[]): string[] {
  return [...arr].sort();
}


export function doisPrimeiros(arr: number[]): number[] {
  return arr.slice(0, 2);
}


export function filtrarPares(arr: number[]): number[] {
  return arr.filter(n => n % 2 === 0);
}
