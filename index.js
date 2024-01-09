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
      inventory: ["small hat", "sunglasses", "vial of blood"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a(n) ${result}.`);
  },
};

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
  static FOOD = [
    "Grass",
    "Lizard",
    "blood",
    "Fish",
    "Insects",
    "Toads",
    "Skin cells",
    "Hair",
    "Bone marrow",
    "Ear wax",
  ];
  static BODILY_FUNCTIONS = [
    "Peeing",
    "Pooping",
    "Eating",
    "Sleeping",
    "Preying",
    "Resting",
    "Grooming",
    "Sexing",
    "Farting",
    "Bathing",
  ];
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = Character.MAX_HEALTH;

    const rollResult = this.roll();
    this.food = Character.FOOD[rollResult % 10];
    this.inventory = [];
    this.bodily_functions = Character.BODILY_FUNCTIONS[rollResult % 10];
  }

  roll(mod = 0) {
    this.lastRollResult = Math.floor(Math.random() * 20) + mod;
    console.log(`${this.name} rolled a(n) ${this.lastRollResult}.`);
    return this.lastRollResult;
  }

  getLastRollResult() {
    return this.lastRollResult || 0;
  }

  // Add items to the inventory
  addInventory(...inventory) {
    this.inventory.push(...inventory);
  }

  // Get the current inventory
  getInventory() {
    return this.inventory;
  }
  isPreoccupied() {
    const privateFunctions = [
      "Peeing",
      "Grooming",
      "Sexing",
      "Resting",
      "Pooping",
    ];

    return privateFunctions.includes(this.bodily_functions);
  }
}

/**
 * ! Part 3: Class Features
 **/
class Adventurer extends Character {
  static ROLES = [
    "Fighter",
    "Healer",
    "Wizard",
    "Adventurer",
    "Companion",
    "Fairy",
  ];
  static WISHES = [
    "Money",
    "Sleep",
    "Health",
    "Land",
    "House",
    "Sex change",
    "Car",
    "Job",
    "Pretty girls",
    "Bad boys",
  ];
  constructor(name, type, coins, role, legs, companion, wish, weapon) {
    super(name, type);
    this.isAgile = true;
    this.legs = legs;
    this.strength = 100;
    this.inventory.push("bedroll", "50 gold coins", "toilet paper");
    this.coins = this.getCoins();
    const rollResult = this.roll();
    this.wish = Adventurer.WISHES[rollResult % 10];

    if (!Adventurer.WISHES.includes(wish)) {
      throw new Error("Sorry, I can't grant that wish");
    }

    if (!Adventurer.ROLES.includes(role)) {
      throw new Error("Role is not in the ROLES");
    }
    this.role = role;
    this.companion = companion;
    this.weapon = weapon;
    this.scout = this.scout();
    this.move = this.move();
    this.preoccupied = this.isPreoccupied();
  }
  scout() {
    //player checks out the terrain
    let movement = this.move();
    return `${this.name} is scouting ahead, -${movement}.`;
  }

  duel(adventurer) {
    let round = 1;

    // If a character is peeing, grooming, sexing, resting, or pooping, then they are occupied and can't fight
    if (this.isPreoccupied() || adventurer.isPreoccupied()) {
      return "We can't duel right now, we are occupied.";
    } else {
      //TODO:Update the health of the characters also!!!
      while (this.health > 50 && adventurer.health > 50) {
        // Both characters make a roll
        const adventurerRoll = this.roll();
        const opponentRoll = adventurer.roll();

        // Ask losing Character if they want to use a weapon after a certain amount of health left

        // Subtract health based on lowest rolls
        if (adventurerRoll > opponentRoll) {
          adventurer.health -= 1;
        } else if (adventurerRoll === opponentRoll) {
          adventurer.health -= 0;
        } else {
          this.health -= 1;
        }

        // Subtract health based on weapon used

        // Log the result of the round
        console.log(
          `Round ${round} ${this.name}'s health: ${this.health}, ${adventurer.name}'s health: ${adventurer.health}\n`,
        );
        round++;
      }

      // Determine a winner
      if (this.health > adventurer.health) {
        return `${this.name} is the winner with health of ${this.health}`;
      } else {
        return `${adventurer.name} is the winner with health of ${adventurer.health} `;
      }
    }
  }
  getCoins() {
    //increase player coins
    return 50 + this.getLastRollResult();
  }
  repairSelf() {
    //prolong player life
    return (this.strength += 5);
  }
  move() {
    //player moves based on number of legs
    if (this.legs === 6) {
      return "jumps";
    } else if (this.legs === 4) {
      return "walks, runs";
    } else if (this.legs === 2) {
      return "walks, runs, jumps";
    }
  }
}

class Companion extends Adventurer {
  constructor(name, type, coins, role, food, legs, companion, wish, weapon) {
    super(name, type, coins, role, food, legs, companion, wish, weapon);
    this.inventory = [];
  }
}

//The Adventurers
const robin = new Adventurer(
  "Robin",
  "Human",
  100,
  "Adventurer",
  2,
  "Leo",
  "Land",
  "Knife",
);
const mathilda = new Adventurer(
  "Mathilda",
  "Fantastical Creature",
  5000,
  "Fairy",
  2,
  "Summer",
  "Sex change",
  "Bottle Caps",
);
const manman = new Adventurer(
  "Manman",
  "Human",
  5000,
  "Fighter",
  2,
  "Little Man",
  "Money",
  "Shotgun",
);
const wiseman = new Adventurer(
  "Wiseman",
  "Human",
  5000,
  "Healer",
  2,
  "Tiny",
  "Sleep",
  "Darts",
);
const lilTommy = new Adventurer(
  "LilTommy",
  "Human",
  5000,
  "Wizard",
  2,
  "Dee",
  "Health",
  "Spell",
);

//The Companions
const frank = new Companion(
  "Frank",
  "Flea",
  100,
  "Companion",
  6,
  "None",
  "Health",
  "Fangs",
);
const leo = new Companion(
  "Leo",
  "Cat",
  100,
  "Companion",
  4,
  "Frank",
  "House",
  "Dagger",
);
const summer = new Companion(
  "Summer",
  "Bird",
  100,
  "Companion",
  2,
  "None",
  "Health",
  "Thorns",
);
const littleMan = new Companion(
  "Little Man",
  "Human",
  100,
  "Companion",
  2,
  "None",
  "Car",
  "Machete",
);
const tiny = new Companion(
  "Tiny",
  "Salamander",
  100,
  "Companion",
  4,
  "None",
  "Land",
  "Slime",
);
const dee = new Companion(
  "Dee",
  "Raven",
  100,
  "Companion",
  2,
  "None",
  "House",
  "String",
);

//The Inventory
robin.addInventory("sword", "potion", "artifact", "bread", "water");
mathilda.addInventory("plants", "springtime");
manman.addInventory(
  "sword",
  "gun",
  "bullets",
  "chinese stars",
  "knife",
  "matches",
);
wiseman.addInventory("stories", "humor", "music", "marijuana", "ceremonies");
lilTommy.addInventory(
  "potions",
  "voodoo",
  "hoodoo",
  "skull",
  "bones",
  "chicken",
);
frank.addInventory("small hat", "sunglasses", "vial of blood");
summer.addInventory("food");
littleMan.addInventory("food");
tiny.addInventory("food");
dee.addInventory("food");

//The Logs
console.log(robin);
console.log(frank);
console.log(leo);
console.log(mathilda);
console.log(manman);
console.log(wiseman);
console.log(lilTommy);
console.log(summer);
console.log(littleMan);
console.log(tiny);
console.log(dee);

//The Duels
console.log(robin.duel(littleMan));

/**
 * ! Part 4: Class Uniforms
 **/

/**
 * ! Part 5: Gather Your Party
 **/
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
//   const robin = healers.generate("Robin");

/**
 * ! Part 6:  Developing Skills
 **/
