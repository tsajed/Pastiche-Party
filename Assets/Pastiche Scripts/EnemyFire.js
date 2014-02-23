#pragma strict

var apple : Transform;
var fireRate : float = 3.0;
var delay : float = 2.0;

function Start () {
	InvokeRepeating ("Fire", delay, fireRate);
}

function Fire () {
		Instantiate(apple, transform.position, transform.rotation);
		audio.Play();
}