document.getElementById('btnFetch').addEventListener("click", function() {
    GetDogPicture();
});

function GetDogPicture() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    //Method 1
    // request.onload = function() {
    //     let data = JSON.parse(this.response);
    //     let img = document.getElementById('imgDog');
    //     img.setAttribute("src", data.message);
    // }
    //Method 2
    //More about onreadystatechange - https://www.w3schools.com/js/js_ajax_http.asp
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            let img = document.getElementById('imgDog');
            img.setAttribute("src", data.message);
        }
    };
    request.send();
}