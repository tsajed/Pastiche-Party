#pragma strict

var apple : Transform;
var speed : float = 20.0;

function Start () {

}

function Update () {
	// If the fire button is pressed...
	if(Input.GetButtonDown("Fire1"))
	{
		audio.Play();
		var appleInstance = Instantiate(apple, transform.position, Quaternion.Euler(new Vector3(0,0,0)));
	}
}