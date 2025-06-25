import { Cachorro, Gato, Animal } from './animal';

describe('Animal abstrações', () => {
  it('deve anunciar o som corretamente', () => {
    const cachorro = new Cachorro('Rex', 'Labrador');
    expect(Animal.anunciar(cachorro)).toBe('Rex faz: Au au');

    const gato = new Gato('Mimi', 'Cinza');
    expect(Animal.anunciar(gato)).toBe('Mimi faz: Miau');
  });
});
