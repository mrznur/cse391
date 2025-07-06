document.addEventListener("DOMContentLoaded", function () {
    const loc = window.location.href;
    const lastMod = document.lastModified;
    document.getElementById("locationDate").innerText =
        "Page Location: " + loc + " | Last Modified: " + lastMod;
});
document.addEventListener("DOMContentLoaded", function () {
    const darkBtn = document.querySelector('.dark-btn');
    if (darkBtn) {
        darkBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                darkBtn.textContent = "🌞 Toggle White Mode";
            } else {
                darkBtn.textContent = "🌙 Toggle Dark Mode";
            }
        });
        // Set initial button text based on mode
        if (document.body.classList.contains('dark-mode')) {
            darkBtn.textContent = "🌞 Toggle White Mode";
        } else {
            darkBtn.textContent = "🌙 Toggle Dark Mode";
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('click', function() {
            profileImg.classList.toggle('zoomed');
        });
    }
});

