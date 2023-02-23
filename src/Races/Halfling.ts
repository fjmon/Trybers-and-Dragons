import Race from './Race';

export default class Halfling extends Race {
  private _maxLife: number;
  static instances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLife = 60;
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}