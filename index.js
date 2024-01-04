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
            belongings: ["small hat", "sunglasses"]
        }
    }
    }
  
  
//loop to log Robin's inventory
for (item in adventurer.inventory){
    console.log(adventurer.inventory[item])
}

//loop to access Robin's campanion info
for (item in adventurer.companion){
    console.log(adventurer.companion[item])
}