import { DND5E } from '/dnd5e/module/config.mjs'

console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
});

Hooks.on("ready", async function() {

    console.log(DND5E.lootTypes);

    const data = {};
    console.log("This code runs once core initialization is ready and game data is available.");
    const myContent = await renderTemplate("modules/vtt-comfy-alchemy/templates/mainDialogue.hbs", data);

    new Dialog({
        title: "My Custom Dialog Title",
        content: myContent,
        buttons: {}
    }).render(true);
});