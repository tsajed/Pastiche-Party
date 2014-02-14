#pragma strict
var bubble1 : GameObject;
var bubble2 : GameObject;
var bubble3 : GameObject;
var bubble4 : GameObject;
var bubble5 : GameObject;
var endingMona : GameObject;

var blah : boolean = false;
var textDelay : float = 4.0;

function Start() {
	if(!Application.isLoadingLevel)
		startCinematic();
}

function Update() {
	/*if(Time.time > textDelay && blah == false) {
		startCinematic();
		blah = true;
	} */
}

function startCinematic() {
	bubble1.SetActive(true);

	yield WaitForSeconds(4.0);

	bubble1.SetActive(false);
	bubble2.SetActive(true);

	yield WaitForSeconds(4.0);

	bubble2.SetActive(false);
	bubble3.SetActive(true);

	yield WaitForSeconds(4.0);

	bubble3.SetActive(false);
	bubble4.SetActive(true);

	yield WaitForSeconds(5.0);

	bubble4.SetActive(false);
	bubble5.SetActive(true);

	yield WaitForSeconds(3.0);

	endingMona.SetActive(true);

}