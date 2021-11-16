export class Currency{
  constructor(
    public last: number,
    public volume: number,
    public base_unit: string,
    public change: any,
    public colors: any,
    public name: string,
    public quote_unit: any,
  ){}
}
