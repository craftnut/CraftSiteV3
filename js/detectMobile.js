// if the user is on a mobile phone, show them the mobile page, I am too lazy to learn responsive web design.
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    window.location.replace("mobile.html");
}