import { CachorroInfo, PassaroInfo, InfoAnimal } from './infoAnimal';

describe('InfoAnimal', () => {
  it('deve retornar descrição correta e respeitar alteração de atributos', () => {
    const cachorro: InfoAnimal = new CachorroInfo('Rex', 'Labrador', 3);
    expect(cachorro.obterInfo()).toBe('Rex é um Labrador de 3 anos');
    (cachorro as CachorroInfo).idade = 5;
    expect(cachorro.obterInfo()).toBe('Rex é um Labrador de 5 anos');

    const passarinho: InfoAnimal = new PassaroInfo('Tweety', 'Canário', true);
    expect(passarinho.obterInfo()).toBe('Tweety é um(a) Canário que voa');
    (passarinho as PassaroInfo).podeVoar = false;
    expect(passarinho.obterInfo()).toBe('Tweety é um(a) Canário que não voa');
  });
});
