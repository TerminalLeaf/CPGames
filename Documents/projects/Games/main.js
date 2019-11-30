var gold = 0;
var goldPerClick = 1;
var upgradeCost = 10;
var autoBuyCost = 100;
var autoBuyers = 0;
var timesPrestiged = 0;
var prestigeCost = 1000000000000000;
var autoBuyMult = 1;
var autoBuyMultCost = 1000000;

document.getElementById("mine").onclick = mineGold;
document.getElementById("upgradePick").onclick = upgradePickaxe;
document.getElementById("buyAutobuy").onclick = startAutobuy;
document.getElementById("buyAutobuyUpgrade").onclick = upgradeAutobuy;
document.getElementById("prestigeButton").onclick = startPrestige;
document.getElementById("prestigeButton").style.display ='none';
document.getElementById("prestigeIdentifier").style.display ='none';


function mineGold() {
	gold=gold+goldPerClick;
  document.getElementById("goldMined").innerHTML = gold;
	if (gold>=prestigeCost) {
		document.getElementById("prestigeButton").style.display ='';
		document.getElementById("prestigeIdentifier").style.display ='';
	}
}

function startPrestige() {
	if (gold>=prestigeCost) {
		timesPrestiged++;
		goldPerClick=1
		goldPerClick=goldPerClick^(2*timesPrestiged);
		gold = 0;
		document.getElementById("prestigeButton").style.display ='none';
		document.getElementById("goldMined").innerHTML = gold;
		upgradeCost = 10;
		document.getElementById("upgrade").innerHTML = upgradeCost;
		autoBuyCost = 100;
		document.getElementById("costForAutoBuyer").innerHTML = autoBuyCost;
		autoBuyers = 0;
		document.getElementById("automineramount").innerHTML = autoBuyers;
		prestigeCost = prestigeCost*prestigeCost*prestigeCost*prestigeCost*prestigeCost*prestigeCost*prestigeCost*prestigeCost*prestigeCost*prestigeCost;
		document.getElementById("costForPrestige").innerHTML = prestigeCost;
		autoBuyMult = 1;
		autoBuyMultCost = 1000000;
		document.getElementById("currentAutobuyMult").innerHTML = autoBuyMult;
		document.getElementById("costForUpgradeAutoBuyer").innerHTML = autoBuyMultCost;
		document.getElementById("howManyTimesPrestiged").innerHTML = timesPrestiged;
	}
}

function upgradePickaxe() {
	if (gold>=upgradeCost) {
  	gold=gold-upgradeCost;
    document.getElementById("goldMined").innerHTML = gold;
    goldPerClick=goldPerClick*2;
    upgradeCost=upgradeCost*2
    document.getElementById("upgrade").innerHTML = upgradeCost;
  }
}

function startAutobuy() {
	if (gold>=autoBuyCost) {
  	gold=gold-autoBuyCost;
  	document.getElementById("goldMined").innerHTML = gold;
    autoBuyCost=autoBuyCost*2;
    autoBuyers++;
    document.getElementById("costForAutoBuyer").innerHTML = autoBuyCost;
		var mainGameLoop = window.setInterval(function() {
  		gold=gold+((goldPerClick)/(100/autoBuyMult))*autoBuyers*autoBuyMult;
      document.getElementById("goldMined").innerHTML = gold;
			if (gold>=prestigeCost) {
				document.getElementById("prestigeButton").style.display ='';
			}
		}, 1000/autoBuyMult)
    document.getElementById("automineramount").innerHTML = autoBuyers;
  }
}

function upgradeAutobuy() {
	if (gold>=autoBuyMultCost) {
		gold=gold-autoBuyMultCost;
		autoBuyMult++;
		document.getElementById("currentAutobuyMult").innerHTML = autoBuyMult;
		autoBuyMultCost=autoBuyMultCost*2;
		document.getElementById("costForUpgradeAutoBuyer").innerHTML = autoBuyMultCost;
	}
}


window.addEventListener('keydown', onKeyDownTwo, true);

function onKeyDownTwo(evt) {
	var x = event.which
	if (x==71) {
		console.log(evt.keyCode);
		mineGold();
	}
	if (x==77) {
		startPrestige();
		upgradePickaxe();
		startAutobuy();
		upgradeAutobuy();
	}
	if (x==80) {
		upgradePickaxe();
	}
	if (x==65) {
		startAutobuy();
	}
	if (x==85) {
		upgradeAutobuy();
	}
	if (x==32) {
		startPrestige();
	}
}
