#pragma strict

function Start () {

}

function Update () {
	transform.position = Vector2.Lerp(transform.position, Vector2(transform.position.x, -4.4), Time.deltaTime);
}