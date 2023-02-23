import Race from './Race';

export default class Orc extends Race {
  private _maxLife: number;
  static instances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLife = 74;
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}