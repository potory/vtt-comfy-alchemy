const MODULE_ID = "Comfy Alchemy";
Hooks.once('setup', async function comfyAlchemySetup() {
    print(`Initializing ${MODULE_ID}`);
    print(CONFIG.DND5E.lootTypes);

    CONFIG.DND5E.lootTypes['ingridient'] = {
        label: "Ингридиент"
    };

    print(CONFIG.DND5E.lootTypes);
});

function print(message) {
    console.log(MODULE_ID, '|', message);
}