document.addEventListener("DOMContentLoaded", function (event) {
    var themeSwitcher = document.getElementById("mode");
    var nav = document.getElementById("nav");
    var foot = document.getElementById("foot");
    
    themeSwitcher.onclick = function () {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var switchToTheme = currentTheme === "dark" ? "light" : "dark"
        
        console.log(switchToTheme);
        document.documentElement.setAttribute("data-theme", switchToTheme);

        if (switchToTheme === "dark") {
            nav.classList.remove('navbar-light');
            nav.classList.remove('bg-light');
            foot.classList.remove('bg-light');

            nav.classList.toggle('navbar-dark');
            nav.classList.toggle('bg-dark');
            foot.classList.toggle('bg-dark');

        } else {
            nav.classList.remove('navbar-dark');
            nav.classList.remove('bg-dark');
            foot.classList.remove('bg-dark');

            nav.classList.toggle('navbar-light');
            nav.classList.toggle('bg-light');
            foot.classList.toggle('bg-light');

        }
    }
});
