localStorage["lp.message.wall.active"] = "0";
localStorage["lp.message.wall.countdown"] = "2";

setTimeout(() => {
	let wall = document.querySelector(".brz_msg_wall_body");
	
	if (wall != null) {
		wall.parentNode.style.display = "none";
		console.log("Banner removed");
	}
}, 500);


