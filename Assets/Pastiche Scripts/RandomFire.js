#pragma strict

var projectiles : GameObject[];		// Array of enemy prefabs.

private var randomTime : float;
private var lastSpawn : float;

function Start () {
	lastSpawn = Time.time;
	randomTime = Random.Range(2, 6);
}

function Update () {

	if(Time.time > lastSpawn + randomTime) {
		// Instantiate a random enemy.
		var index = Random.Range(0, projectiles.Length);
		Instantiate(projectiles[index], transform.position, transform.rotation);
		lastSpawn = Time.time;
	}
}