function openSideMenu() {
    "use strict";
    document.getElementById("navOpen").style.width = "250px";
}

function closeSideMenu() {
    "use strict";
    document.getElementById("navOpen").style.width = "0";
}

window.onload = function () {
    "use strict";
    document.getElementById('modalbutton').onclick = function () {
        document.getElementById('modal').style.display = "none";
    };
};

