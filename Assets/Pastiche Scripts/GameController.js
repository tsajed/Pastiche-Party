#pragma strict

var playerSpeech : float = 3.0;
var bossTime : float = 20.0;
var textDelay : float = 4.0;

var bossPrefab : Transform;
var spawners : GameObject;
var player : GameObject;
var bubble : GameObject;
var text1 : GameObject;
var text2 : GameObject;


var firstText : boolean = false;

function Start() {
	spawners = GameObject.Find("Spawners");
	player = GameObject.Find("Player");
}

function Update () {
	if(Time.time > playerSpeech && firstText == false) {
		firstTextLine();
	}

	if(Time.time > bossTime) {
		bossLine();
		Instantiate(bossPrefab, Vector2(22, 0), Quaternion.identity);
		Destroy(spawners);
		enabled = false;
	}
}

function firstTextLine() {
	bubble.SetActive(true);
	text1.SetActive(true);
	firstText = true;

	yield WaitForSeconds(4.0);
	bubble.SetActive(false);
	text1.SetActive(false);	
}

function bossLine() {
	bubble.SetActive(true);
	text2.SetActive(true);

	yield WaitForSeconds(4.0);
	bubble.SetActive(false);
	text2.SetActive(false);

}