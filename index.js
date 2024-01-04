/**
 * ! Part 1: Humble Beginnings
**/

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a(n) ${result}.`)
        }
    }
  
  
//loop to log Robin's inventory
for (item in adventurer.inventory){
    console.log(adventurer.inventory[item])
}

//loop to access Robin's companion's info
for (item in adventurer.companion){
    console.log(adventurer.companion[item])
}

//test the dice rolls
console.log(adventurer.roll())

/**
 * ! Part 2
**/
class Character{
    constructor(name){
        this.name = name
        this.health = 100
        this.inventory = []
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a(n) ${result}.`)
        }
}
//create Robin
const robin = new Character("Robin")
robin.inventory = ["sword", "potion", "artifact"]
robin.companion = new Character("Leo")
robin.companion.type = "Cat"
robin.companion.companion = new Character("Frank")
robin.companion.companion.type = "Flea"
robin.companion.companion.inventory = ["small hat", "sunglasses"]
console.log()
console.log(robin.companion.roll())
console.log(robin.companion.companion.roll())