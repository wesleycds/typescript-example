export interface InfoAnimal {
  obterInfo(): string;
}

export class CachorroInfo implements InfoAnimal {
  constructor(
    public nome: string,
    public raca: string,
    public idade: number
  ) {}

  obterInfo(): string {
    return `${this.nome} é um ${this.raca} de ${this.idade} anos`;
  }
}

export class PassaroInfo implements InfoAnimal {
  constructor(
    public nome: string,
    public especie: string,
    public podeVoar: boolean
  ) {}

  obterInfo(): string {
    return `${this.nome} é um(a) ${this.especie}${this.podeVoar ? ' que voa' : ' que não voa'}`;
  }
}