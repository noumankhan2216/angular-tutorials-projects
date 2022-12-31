export class Ingredient {
    // public name!: string;
    // public amount!: number;

    // constructor(name: string, amount: number){
    //     this.name = name;
    //     this.amount = amount;
    // }
    
    // just adding public in front of them is a short cut to declear them first and then
    // assign them inside the constructor as above
    constructor(public name: string, public amount: number){}
}