// ==UserScript==
// @name         buttons in agar
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       Goose
// @match        http://petridish.pw/
// @grant        none
// ==/UserScript==

function addButton()
{
    var inpClans = document.createElement("input");
    var inpStop = document.createElement("input");
    var inpNicks = document.createElement("input");
    var inpGo = document.createElement("input");
 
    inpClans.type = "button";
    inpClans.name = "inpClans";
    inpClans.value = "Clans";
    inpClans.id = "idClans";
 
    inpGo.type = "button";
    inpGo.name = "inpGo";
    inpGo.value = "Go    ";
    inpGo.id = "idGo";
 
    inpNicks.type = "button";
    inpNicks.name = "inpNicks";
    inpNicks.value = "Nicks";
    inpNicks.id = "idNicks";
 
    inpStop.type = "button";
    inpStop.name = "inpStop";
    inpStop.value = "Stop  ";
    inpStop.id = "idStop";
 
    document.body.appendChild(inpClans);
    document.body.appendChild(inpStop);
    document.body.appendChild(inpNicks);
    document.body.appendChild(inpGo);
  
    document.getElementById("idClans").onclick = ClansTimer;
    document.getElementById("idStop").onclick = StopTimer;
    document.getElementById("idNicks").onclick = NicksTimer;
    document.getElementById("idGo").onclick = GoTimer;
    document.getElementById("idClans").style.position = "absolute";
    document.getElementById("idClans").style.left = "10px";
    document.getElementById("idClans").style.top = "35px";
    document.getElementById("idStop").style.position = "absolute";
    document.getElementById("idStop").style.left = "10px";
    document.getElementById("idStop").style.top = "65px";
    document.getElementById("idStop").style.color = "red";
    document.getElementById("idNicks").style.position = "absolute";
    document.getElementById("idNicks").style.left = "65px";
    document.getElementById("idNicks").style.top = "35px";
    document.getElementById("idGo").style.position = "absolute";
    document.getElementById("idGo").style.left = "65px";
    document.getElementById("idGo").style.top = "65px";
}
 
addButton();
 
var timer;
var arr = ["[WF] ◁◁◀Гусь▶⊲⊲", "[WF] ◁◀◁Гусь⊲▶⊲", "[WF] ◀◁◁Гусь⊲⊲▶"];
 
function ClansTimer()
{
    timer = setInterval(function() {
var arr = ["[Na`Vi]", "|QSL|", "|ASP|", "[BOT]", "[BNT]", "[PANZAR]", "[S.P]", "[APB]", "[5]", "[hb]", "[dem]", "Twitch/", "YT/", "[SB]", "[ZAW]", "[VEGA]"];
var rand = Math.floor(Math.random() * arr.length);
setNick(arr[rand] + "Гусь");
}, 1);
}
 
function NicksTimer()
{
    timer = setInterval(function() {
var arr = ["Россия", "Moon", "Гусь", "Pluton", "The Flash", "USA", "Gabe", "Sad Frog", "Illuminati", "Windows", "Linux", "Шум", "Town", "Жабка", "Matrix", "Што", "Money", "Стьюи", "Гипножаба", "Пахом", "Педобир", "Гомер", "Цепь Арго", "YouTube", "Ghost Busters", "Медведев", "Superman", "Nvidia"];
var rand = Math.floor(Math.random() * arr.length);
setNick(arr[rand]);
}, 1);
}
 
function GoTimer()
{
    timer = setInterval(function() {
var el = arr.shift (); arr.push (el); setNick (el)}, 200);
}
 
function StopTimer()
{
    clearInterval(timer);
    setNick("[WF]Гусь");
}
