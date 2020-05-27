import {Payload} from "./Payload";
import {Cargo} from "./Cargo";
import {Astronaut} from "./Astronaut";
export class Rocket {
    totalCapacityKg: number;
    name: string;
    cargoItems:Cargo [];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    sumMass( items: Payload[] ): number {
        let sum: number = 0;
        for(let i=0; i < 10; i++){
            sum = sum + items[i].massKg;
        };
        return sum;
    }
    currentMassKg(): number {
        let sum: number = 0;
        sum += (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
        return sum;
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        };
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        };
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut)
            return true;
        } else {
            return false;
        };
    }
}