localStorage["lp.message.wall.active"] = "0";
localStorage["lp.message.wall.countdown"] = "2";

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

setCookie("pw6", "==", "1");

setTimeout(() => {
	let wall = document.querySelector(".brz_msg_wall_body");
	
	if (wall != null) {
		wall.parentNode.style.display = "none";
		console.log("Banner removed");
	}
}, 500);


