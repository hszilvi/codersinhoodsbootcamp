/**
 * Exercise
 *
 * 1. create {User} class which receives {name},
 * {age}, {hunger}.
 *
 * 2. {User} should has {name}, {age} and {hunger} getters.
 *
 * 3. Add getter {foodConsumed} which returns {foodEaten}
 *
 * 4. {hungerStatus} should return a string:
 * base on hunger level {hunger} should return a string:
 * 0 - 20: "Famished"
 * 21 - 40: "Starving"
 * 41 - 60: "Hungry"
 * 61 - 80: "Content"
 * 81 - 100: "Full"
 *
 * 5. {hunger} should have setter.
 * Make sure you can't set {hunger} more than 100.
 *
 * 6. Add a method {eatFood}, which takes an object as an argument
 * (ex. {name:string; value: number;}) and add {value} to {hunger},
 * and food {name} store to {foodEaten}.
 * Make sure you can't set {hunger} more than 100.
 *
 * 7. Add setter {starveABit} which takes an argument(number),
 * and deduct from {hunger}.
 * If after deduction, hunger <= 0 return "You are dead".
 *
 * 8. If user is dead, make sure that on any method call you are getting
 * "User is dead"
 */
class User {
    constructor(name, age, hunger) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.foodEaten = [];
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getHunger() {
        return this.hunger;
    }
    getFoodEaten() {
        return this.foodEaten;
    }
    hungerStatus() {
        if (this.hunger >= 0 && this.hunger <= 20) {
            return 'Famished';
        }
        if (this.hunger >= 21 && this.hunger <= 40) {
            return 'Starving';
        }
        if (this.hunger >= 41 && this.hunger <= 60) {
            return 'Hungry';
        }
        if (this.hunger >= 61 && this.hunger <= 80) {
            return 'Content';
        }
        if (this.hunger >= 81 && this.hunger <= 100) {
            return 'Full'
        };
        // switch(true) {
        //     case this.hunger >= 0 && this.hunger <= 20:
        //         return 'Famished';
        //         break;
        //     case this.hunger >= 21 && this.hunger <= 40:
        //         return 'Starving';
        //         break;
        //     case this.hunger >= 41 && this.hunger <= 60:
        //         return 'Hungry';
        //         break;
        //     case this.hunger >= 61 && this.hunger <= 80:
        //         return 'Content';
        //         break;
        //     case this.hunger >= 81 && this.hunger <= 100:
        //         return 'Full';
        // }
    }
}
