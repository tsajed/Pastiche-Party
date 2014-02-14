#pragma strict

var speed : float = 4.0;

function Start () {

}

function Update () {

	var xMove : float = Input.GetAxis("Horizontal") * Time.deltaTime * speed;

	transform.Translate(xMove, 0, 0);

	var yMove : float = Input.GetAxis("Vertical") * Time.deltaTime * speed;
	transform.Translate(0, yMove, 0);

	var viewPoint = Camera.main.WorldToViewportPoint(transform.position);
	viewPoint.x = Mathf.Clamp01(viewPoint.x);
	viewPoint.y = Mathf.Clamp01(viewPoint.y);

	transform.position = Camera.main.ViewportToWorldPoint(viewPoint);

}