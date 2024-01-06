/**
 * ! Part 1: Humble Beginnings
**/

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact", "bread", "water"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses", "vial of blood"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a(n) ${result}.`)
        }
    }
  
  
//loop to log Robin's inventory
// for (item in adventurer.inventory){
//     console.log(adventurer.inventory[item])
// }

//loop to access Robin's companion's info
// for (item in adventurer.companion){
//     console.log(adventurer.companion[item])
// }

//test the dice rolls
// console.log(adventurer.roll())

/**
 * ! Part 2: Class Fantasy
**/
class Character {
    static MAX_HEALTH = 100;

    constructor(name, type) {
        this.name = name;
        this.type = type
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a(n) ${result}.`);
        return result
    }

    // Add items to the inventory
    addInventory(...inventory) {
        this.inventory.push(...inventory);
    }

    // Get the current inventory
    getInventory() {
        return this.inventory;
    }
}

/**
 * ! Part 3: Class Features
**/
class Adventurer extends Character{
    static ROLES = ["Fighter", "Healer", "Wizard"]
    constructor(name, type, coins, role, food, legs){
        super(name, type)
        this.food = this.eat()
        this.isAgile = true
        this.strength = 100
        this.inventory.push("bedroll", "50 gold coins")
        this.role = role
        this.coins = this.getCoins()
    }
    scout(){
        let result = super.roll()
        return `${this.name} is scouting ahead and rolled a(n) ${result}`
    }
    getCoins(){
        console.log(this.scout())
        return 50 + Math.floor(Math.random() * 20) + 1 
    }
    repairSelf(){
        return this.strength+=5
    }
    // getRole() {
    //     const result = Math.floor(Math.random() * this.ROLES.length);
    //     return this.ROLES[result];
    // }
    
    move(){
        if(this.legs === 6){
            return "runs"
        }else if(this.legs === 4){
            return "jumps"
        }else if(this.legs === 2){
            return "walks"
        }
    }
    eat(){
        if(this.legs === 6){
            return "eats blood"
        }else if(this.legs === 4){
            return "carnivore"
        }else if(this.legs === 2){
            return "eats most anything"
        }
    }
}


class Companion extends Adventurer{
    constructor(name, type, coins, role, food, legs){
        super(name, type, coins, role, food)
        this.legs = legs
        this.inventory = []
    }
    
}

const robin = new Character("Robin", "human", 100, "adventurer", "potatoes", 2);
robin.addInventory("sword", "potion", "artifact", "bread", "water");
robin.roll()
console.log(robin)

const frank = new Companion("Frank", "Flea", 100, "bloodsucker", "blood", 6);
frank.addInventory("small hat", "sunglasses", "vial of blood");
frank.roll()
console.log(frank)

const leo = new Companion("Leo", "Cat", 100, "feline friend", "lizards", 4);
frank.addInventory("small hat", "sunglasses", "vial of blood");
leo.roll()
console.log(leo)



// const frank = new Character("Frank", "flea");
// frank.addInventory("small hat", "sunglasses", "vial of blood");
// frank.roll()
// console.log(frank)


/**
 * ! Part 4: Class Uniforms
**/
