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
 * ! Part 2: Class Fantasy
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

/**
 * ! Part 3: Class Features
**/
class Adventurer extends Character{
    constructor(name, coins, role, food){
        super(name)
        this.role = role
        this.coins = this.getCoins()
        this.food = this.getFood()
        this.inventory.push( ["sword", "potion", "artifact"], ["small hat", "sunglasses"], "bedroll")
    }
    scout(){
        return `${this.name} is scouting ahead...`
        super.roll()
    }
    getCoins(){
        console.log(this.scout())
        return 50 + Math.floor(Math.random() * 20) + 1 
    }
    getFood(){
        let randNum = Math.floor(Math.random() *3)
        return ["chicken", "rabbit", "ox-tails"][randNum]
    }
    
}
console.log()
//this will show me what is available for use from the parent class.  So there is health of 100 and an empty array, and a name of "Junie"
const junie = new Adventurer("Junie", 50, "adventurer", )
console.log(junie)

class Companion extends Character{
    constructor(name, legs, type){
        super(name)
        this.legs = legs
        this.type = type
        this.inventory = []
    }
    move(){
        if(this.legs < 6){
            return "runs"
        }else{
            return "jumps"
        }
    }
    eat(){
        if(this.legs < 6){
            return "eats anything"
        }else{
            return "eats blood"
        }
    }
    getInventory(...inventory){
        this.inventory.push(...inventory)
    }

}

const nancy = new Companion("Nancy", 4, "flea" )
console.log(nancy)
console.log(nancy.eat())
console.log(nancy.move())
console.log(nancy.getInventory(adventurer.companion.inventory))
