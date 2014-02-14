#pragma strict
var health = 300;

var explosionLocations : Transform;
var explosionPrefab : Transform;
var explosionSound : AudioClip;
var isDead : boolean = false;
function Start () {
	explosionLocations = transform.Find("Explosions");
}

function Update () {
	transform.position = Vector2.Lerp(transform.position, Vector2(7.0, transform.position.y), Time.deltaTime);

	if(health <= 0 && isDead == false) {
		isDead = true;
		addExplosions();
	}
}

function OnCollisionEnter2D(coll : Collision2D) {

	if(coll.gameObject.tag == "Apple") {
		health -= 50;
	}

}

function addExplosions() {

	for (var child : Transform in explosionLocations) {
		var explosion = Instantiate(explosionPrefab, child.transform.position, child.transform.rotation);
		if(child.transform.name == "Explosion7") {
			explosion.transform.localScale = Vector2(1.5, 2);
			explosion.renderer.sortingLayerName = "Foreground";
		}    	
		audio.PlayOneShot(explosionSound, 0.7);
    	yield WaitForSeconds(1.0);
	}

	yield WaitForSeconds(3.0);

	Application.LoadLevel(2);


}