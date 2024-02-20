console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
    CONFIG.DND5E.lootTypes.alchemy = {
        label: "Алхимический ингридиент"
    };
});

Hooks.on("ready", async function() {

    const data = {};
    console.log("This code runs once core initialization is ready and game data is available.");
    const myContent = await renderTemplate("modules/vtt-comfy-alchemy/templates/mainDialogue.hbs", data);

    new Dialog({
        title: "My Custom Dialog Title",
        content: myContent,
        buttons: {}
    }).render(true);
});