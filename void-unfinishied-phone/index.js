let handy = mp.browsers.new("package://Handy/index.html");
let player = mp.players.local;
let showedPhone = false;
let openedDispatch = 0;
let coldown = false;

 mp.keys.bind(0x71, false, function() {
    if(mp.players.local.getVariable("amFarmen") == 1) return;
    if(mp.players.local.getVariable("etwasTun") == 1) return;
    if(mp.players.local.getVariable("Death") == true) return;
    if(mp.players.local.getVariable("Gefesselt") == 1) return;
    if(coldown == true) return mp.events.call("Client:ShowNotify", "", "Das kannst du nicht machen!", "red",  3000);
    if(showedPhone == false){
        handy.execute(`showHandy();`);
        handy.execute(`updateProfilApp("${player.name}", "${player.getVariable("Fraktion")}", "${player.getVariable("Rang")}", "${player.getVariable("Level")}", "${player.getVariable("Warns")}");`);
        showedPhone = true;
        mp.game.mobile.createMobilePhone(4);
        mp.game.mobile.setMobilePhoneScale(0);
        mp.gui.cursor.visible = true;
        mp.gui.chat.activate(false);
        mp.game.ui.displayHud(false);
        mp.events.callRemote("takePhoneAnim")
        coldown = true
        setTimeout(() => {
            coldown = false;
        }, 1500);
    } else if(showedPhone == true){
        handy.execute(`hideHandy();`);
        mp.game.invoke(' 0x3BC861DF703E5097');
        showedPhone = false;
        mp.gui.cursor.visible = false;
        mp.gui.chat.activate(true);
        mp.game.ui.displayHud(true);
        mp.events.callRemote("stopPhoneAnim")
        coldown = true
        setTimeout(() => {
            coldown = false;
        }, 1500);
    }
}); 





mp.events.add("clearDispatches", () => {
    openedDispatch = 0;
});

mp.events.add("Handy:CreateFrakMember", (name, rang) => {
    handy.execute(`createFrakMember("${name}", "${rang}");`);
});

mp.events.add("updatePlayerInfo", (name, fraktion, rang, level, warns) => {
    handy.execute(`updateProfilApp("${name}", "${fraktion}", "${rang}", "${level}", "${warns}");`);
});

mp.events.add("Handy:Player:Verlassen:Funk", () => {
    mp.events.callRemote("Server:Handy:Player:Verlassen:Funk")
});

mp.events.add("Handy:Player:Join:Funk", (funkfreq) => {
    mp.events.callRemote("Server:Handy:Player:Join:Funk", funkfreq)
});

mp.events.add("Handy:Player:SendDispatch", (frakname, dispatchreason) => {
    if(openedDispatch == 0){
    mp.events.callRemote("Server:Handy:Player:SendDispatch", frakname, dispatchreason)
    openedDispatch = 1;
    }
});

mp.events.add("Handy:Player:Fraktion:Invite", (playername) => {
    if(player.getVariable("Fraktion") == "Zivilist") return;
    if(player.getVariable("Rang") < 10) return;
    mp.events.callRemote("Server:Handy:Player:Fraktion:Invite", playername)
});

mp.events.add("Handy:Player:Fraktion:Frakmedic", (playername) => {
    if(player.getVariable("Fraktion") == "Zivilist") return;
    if(player.getVariable("Rang") < 10) return;
    mp.events.callRemote("Server:Handy:Player:Fraktion:Frakmedic", playername)
});

mp.events.add("Handy:Player:Fraktion:KickOutFraktion", (playername) => {
    if(player.getVariable("Fraktion") == "Zivilist") return;
    if(player.getVariable("Rang") < 10) return;
    mp.events.callRemote("Server:Handy:Player:Fraktion:KickOutFraktion", playername)
});

mp.events.add("Handy:Player:Fraktion:SetRang", (playername, playerrang) => {
    if(player.getVariable("Fraktion") == "Zivilist") return;
    if(player.getVariable("Rang") < 10) return;
    mp.events.callRemote("Server:Handy:Player:Fraktion:SetRang", playername, parseInt(playerrang))
});

mp.events.add("HavePlayerTheRank", () => {
    if(player.getVariable("Fraktion") == "Zivilist") return;
    handy.execute(`xxaaas();`)
});