const markAllAsRead = document.getElementById("mark-all-as-read");
const unread = document.getElementsByClassName("unread");

const notificationNumber = document.querySelector("#notification-number");
notificationNumber.innerHTML = unread.length.toString();


function f_markAllAsRead() {
    while (unread.length != 0) {
        unread[0].className = "read";
    }
    notificationNumber.innerHTML = unread.length.toString();
}
