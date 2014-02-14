#pragma strict

var speed : float = 4.0;
var hurtSound : AudioClip[];
var repeatDamagePeriod : float = 2.0;		// How frequently the player can be damaged.

private var lastHitTime : float;					// The time at which the player was last hit.


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

function OnCollisionEnter2D(coll : Collision2D) {
	if(coll.gameObject.tag == "Enemy" || coll.gameObject.tag == "EnemyProjectile") {
		// if the time exceeds the time of the last hit plus the time between hits...
		if (Time.time > lastHitTime + repeatDamagePeriod) {
			AudioSource.PlayClipAtPoint(hurtSound[Random.Range(0, 4)], transform.position);
			lastHitTime = Time.time; 
		}
	}

}