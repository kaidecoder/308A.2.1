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
    static FOOD = ["Grass", "Lizard", "blood", "Fish", "Insects", "Toads", "Skin cells", "Hair", "Bone marrow", "Ear wax"]
    constructor(name, type) {
        this.name = name;
        this.type = type
        this.health = Character.MAX_HEALTH;
        
        const rollResult = this.roll()
        this.food = Character.FOOD[rollResult % 10]
        if(Character.MAX_HEALTH !== 100){
            this.health -= this.rollResult
        }
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + mod;
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
    static ROLES = ["Fighter", "Healer", "Wizard", "Adventurer", "Companion"]
    constructor(name, type, coins, role, legs, companion){
        super(name, type)
        this.isAgile = true
        this.legs = legs
        this.strength = 100
        this.inventory.push("bedroll", "50 gold coins")
        this.coins = this.getCoins()
        
        if(!Adventurer.ROLES.includes(role)){
            throw new Error("Role is not in the ROLES")
        }
        this.role = role
        this.companion = companion
        this.scout = this.scout()
        this.move = this.move()
    }
    scout(){
        let movement = this.move()
        return `${this.name} is scouting ahead, -${movement}.`
    }
    duel(adventurer){
        while(this.health >= 50){
            //holds the health values
            let arr = []
            let round = []
            let result = super.roll()
            arr.push({adventurer: result})
            //sort the results, subtract one from the lowest
            arr.sort((a,) => a.this.health - b.this.health)
            let lowest = arr[0]--
        }
        return {arr, lowest}
    }
    getCoins(){
        return 50 + Math.floor(Math.random() * 20) + 1 
    }
    repairSelf(){
        return this.strength+=5
    }
    move(){
        if(this.legs === 6){
            return "jumps"
        }else if(this.legs === 4){
            return "walks, runs"
        }else if(this.legs === 2){
            return "walks, runs, jumps"
        }
    }
   
}

class Companion extends Adventurer{
    constructor(name, type, coins, role, food, legs, companion){
        super(name, type, coins, role, food, legs, companion)
        this.inventory = []
    }
}

const robin = new Adventurer("Robin", "human", 100, "Adventurer", 2, "Leo");
robin.addInventory("sword", "potion", "artifact", "bread", "water");
console.log(robin)

const frank = new Companion("Frank", "Flea", 100, "Companion", 6, "None");
frank.addInventory("small hat", "sunglasses", "vial of blood");
console.log(frank)

const leo = new Companion("Leo", "Cat", 100, "Companion", 4, "Frank");
console.log(leo)



// frank = new Character("Frank", "flea");
// console.log(frank.food)
// frank.addInventory("small hat", "sunglasses", "vial of blood");
// frank.roll()
// console.log(frank)


/**
 * ! Part 4: Class Uniforms
**/

/**
 * ! Part 5: Gather Your Party
**/
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
//   const robin = healers.generate("Robin");

/**
 * ! Part 6:  Developing Skills
**/
