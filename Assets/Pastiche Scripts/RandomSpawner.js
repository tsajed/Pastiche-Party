#pragma strict

var enemies : GameObject[];		// Array of enemy prefabs.

private var randomTime : float;
private var lastSpawn : float;

function Start () {
	lastSpawn = Time.time;
	randomTime = Random.Range(2, 12);
}

function Update () {

	if(Time.time > lastSpawn + randomTime) {
		// Instantiate a random enemy.
		var enemyIndex = Random.Range(0, enemies.Length);
		Instantiate(enemies[enemyIndex], transform.position, transform.rotation);
		lastSpawn = Time.time;
	}
}