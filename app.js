const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        subCompanion : {
            name: "Frank",
            type: "Flea",
            inventory: ['Hat', 'sunglasses']
        }
    }
}

for(let i = 0; i < adventurer.inventory.length; i++)
{
    console.log(adventurer.inventory[i])
}