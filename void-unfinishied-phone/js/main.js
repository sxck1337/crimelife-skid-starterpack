function showHandy() {
    document.getElementById("bdy").style.display = "block";
}
function hideHandy() {
    document.getElementById("bdy").style.display = "none";
    hearedklingelton = null;
    mp.trigger("sound:cancel")
}

function hideapps(){
    document.getElementById("appBox").style.display = "none";
}
function showapps(){
    document.getElementById("appBox").style.display = "block";
}
function hidallTabs(){
    document.getElementById("funkTab").style.display = "none";
    document.getElementById("profilTab").style.display = "none";
    document.getElementById("serviceTab").style.display = "none";
    document.getElementById("serviceTab2").style.display = "none";
    document.getElementById("settingsTab").style.display = "none";
    document.getElementById("klingeltoeneTab").style.display = "none";
    document.getElementById("fraktionTab").style.display = "none";
    document.getElementById("frakmemberlist").style.display = "none";
}

function showFunkApp(){
    hideapps()
    document.getElementById("funkTab").style.display = "block";
}

function showFraktionsApp(){
    mp.trigger("HavePlayerTheRank")
}

function showProfilApp(){
    hideapps()
    document.getElementById("profilTab").style.display = "block";
}

function showServiceApp() {
    document.getElementById("dispatchinputreason").value = "";
    hideapps()
    document.getElementById("serviceTab").style.display = "block";
}

function showSettingsApp() {
    hideapps()
    document.getElementById("settingsTab").style.display = "block";
}

function showKlingelton(){
    hidallTabs()
    hideapps()
    document.getElementById("klingeltoeneTab").style.display = "block";
}

function showFrakMember(){
    hidallTabs()
    hideapps()
    document.getElementById("frakmemberlist").style.display = "block";
}

function xxaaas(){
    hidallTabs()
    hideapps()
    document.getElementById("fraktionTab").style.display = "block";
}

function backtohome(){
    hidallTabs()
    showapps()
}

function updateProfilApp(name, fraktion, rang, level, warns){
    document.getElementById("profilplayername").innerText = "Name: "+name;
    document.getElementById("profilplayerfraktion").innerText = "Fraktion: "+fraktion;
    document.getElementById("profilplayerrang").innerText = "Rang: "+rang;
    document.getElementById("profilplayerlevel").innerText = "Level: "+level;
    document.getElementById("profilplayerwarn").innerText = "Warns: "+warns;
}

function funkbeitreten(){
    let funkfreq = document.getElementById("funkfreq").value;
    mp.trigger("Handy:Player:Join:Funk", funkfreq);
}

function funkverlassen(){
    mp.trigger("Handy:Player:Verlassen:Funk");
}

function sendDispatch() {
    let frakname = document.getElementById("dispatchfrakname").value;
    let dispatchreason = document.getElementById("dispatchinputreason").value;
    mp.trigger("Handy:Player:SendDispatch", frakname, dispatchreason)
}

function sendDispatchto(frakname) {
    hidallTabs()
    hideapps()
    document.getElementById("serviceTab2").style.display = "block";
    document.getElementById("dispatchfrakname").value = frakname;
}

let hearedklingelton = null;

function hearKlingelton(klingeltonname){
    if(klingeltonname == hearedklingelton){
        //Stop
        mp.trigger("sound:cancel")
    } else {
        //Stop + neues abspielen
        hearedklingelton = klingeltonname;
        mp.trigger("sound:cancel")
        mp.trigger("sound:play", "ByeBye")
    }
}

function fraktioninviteplayer(){
    let playername = document.getElementById("fraktioninviteorsetinput").value;
    if(playername.length < 5) return;
    mp.trigger("Handy:Player:Fraktion:Invite", playername);
}

function fraktionsetfrakmedicplayer(){
    let playername = document.getElementById("fraktioninviteorsetinput").value;
    if(playername.length < 5) return;
    mp.trigger("Handy:Player:Fraktion:Frakmedic", playername);
}

function fraktionkickplayer(){
    let playername = document.getElementById("fraktioninviteorsetinput").value;
    if(playername.length < 5) return;
    mp.trigger("Handy:Player:Fraktion:KickOutFraktion", playername);
}

function fraktionsetrang(){
    let playername = document.getElementById("fraktioninviteorsetinput").value;
    let playerrang = document.getElementById("fraktionranginput").value;
    if(playername.length < 5) return;
    if(playerrang < 0) return;
    if(playerrang > 12) return;
    mp.trigger("Handy:Player:Fraktion:SetRang", playername, playerrang);
}

function createFrakMember(name, rang){
    var $html = $(`
    <div class="frakmemberItem">
        <label class="frakmembername">Name: <br />${name}</label>
        <label class="frakmemberrang">Rang: <br />${rang}</label>
    </div>
    `)
    $("#frakmemberlistItemBox").prepend($html)
}