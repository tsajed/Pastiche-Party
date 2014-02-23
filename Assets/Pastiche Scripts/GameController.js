#pragma strict

var playerSpeech : float = 3.0;
var bossTime : float = 20.0;

var bossPrefab : Transform;
var spawners : GameObject;
var player : GameObject;
var bubble : GameObject;
var text1 : GameObject;
var text2 : GameObject;
var text3 : GameObject;


var timer : float;
var firstText : boolean = false;

function Start() {
	spawners = GameObject.Find("Spawners");
	player = GameObject.Find("Player");
	timer = Time.timeSinceLevelLoad;

	instructions();
}

function Update () {
	Debug.Log(Time.timeSinceLevelLoad);
	if(timer > playerSpeech && firstText == false) {
		firstTextLine();
	}

	if(timer > bossTime) {
		bossLine();
		Instantiate(bossPrefab, Vector2(18, 0), Quaternion.identity);
		Destroy(spawners);
		enabled = false;
	}
	timer = Time.timeSinceLevelLoad;
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

function instructions() {
	
	bubble.SetActive(true);
	text3.SetActive(true);

	yield WaitForSeconds(3.0);
	bubble.SetActive(false);
	text3.SetActive(false);
}