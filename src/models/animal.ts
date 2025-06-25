export abstract class Animal {
  constructor(public nome: string) {}
  abstract emitirSom(): string;

  static anunciar(animal: Animal): string {
    return `${animal.nome} faz: ${animal.emitirSom()}`;
  }
}

export class Cachorro extends Animal {
  constructor(nome: string, public raca: string) {
    super(nome);
  }
  emitirSom(): string {
    return 'Au au';
  }
}

export class Gato extends Animal {
  constructor(nome: string, public cor: string) {
    super(nome);
  }
  emitirSom(): string {
    return 'Miau';
  }
}
