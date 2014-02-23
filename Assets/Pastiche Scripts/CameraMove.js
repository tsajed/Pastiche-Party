#pragma strict

var maxDistance : float = 170.0;
var speed = 0.5;

function Start () {

}

function LateUpdate () {
	transform.Translate(Vector3.right * Time.deltaTime * speed);
}