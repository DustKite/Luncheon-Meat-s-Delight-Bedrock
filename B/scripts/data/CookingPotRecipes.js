const cookingPotRecipes = [
    {
        "identifer": "luncheonmeatsdelight:luncheon_meat_sandwich",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "ingredients": [
            { "item": "luncheonmeatsdelight:sliced_toast" },
            { "item": "luncheonmeatsdelight:sliced_toast" },
            { "item": "luncheonmeatsdelight:luncheon_meat" },
            { "item": "luncheonmeatsdelight:luncheon_meat" },
            { "tag": "farmersdelight:is_cabbage" }
        ],
        "result": {
            "item": "luncheonmeatsdelight:luncheon_meat_sandwich"
        }
    },
    {
        "identifer": "luncheonmeatsdelight:luncheon_meat_can",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "ingredients": [
            { "item": "luncheonmeatsdelight:luncheon_meat_can_raw" }
        ],
        "result": {
            "item": "luncheonmeatsdelight:luncheon_meat_can"
        }
    },
    {
        "identifer": "luncheonmeatsdelight:can_shell_small_toast",
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "ingredients": [
            { "item": "luncheonmeatsdelight:can_shell_dough" }
        ],
        "result": {
            "item": "luncheonmeatsdelight:can_shell_small_toast"
        }
    },
    {
        "identifer": "luncheonmeatsdelight:fried_egg_luncheon_meat",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:bowl"
        },
        "priority": 0,
        "time": 200,
        "ingredients": [
            { "item": "luncheonmeatsdelight:luncheon_meat" },
            { "item": "luncheonmeatsdelight:luncheon_meat" },
            { "tag": "farmersdelight:is_cooked_egg" },
            { "tag": "farmersdelight:is_cooked_egg" }
        ],
        "result": {
            "item": "luncheonmeatsdelight:fried_egg_luncheon_meat"
        }
    }
];

export { cookingPotRecipes };