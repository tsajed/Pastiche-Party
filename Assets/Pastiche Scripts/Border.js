#pragma strict

function OnCollisionEnter2D(coll : Collision2D) {
	if(coll.gameObject.tag == "Apple" || coll.gameObject.tag == "EnemyProjectile") {
		Destroy(coll.gameObject);
	}
}