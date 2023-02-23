import Race from './Race';

export default class Elf extends Race {
  private _maxLife: number;
  static instances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLife = 99;
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}