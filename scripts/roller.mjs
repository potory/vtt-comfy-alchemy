const MODULE_ID = "Comfy Alchemy";
Hooks.once('setup', async function comfyAlchemySetup() {
    console.log(MODULE_ID, '|', `Initializing ${MODULE_ID}`);
    console.log(CONFIG.DND5E);

    CONFIG.DND5E.lootTypes.ingridient = {
        label: "Ингридиент"
    };
});