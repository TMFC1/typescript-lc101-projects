"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < 10; i++) {
            sum = sum + items[i].massKg;
        }
        ;
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var sum = 0;
        sum += (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
        return sum;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        ;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
        ;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
        ;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
