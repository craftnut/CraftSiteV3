document.getElementById("redirect").innerHTML = "Page not found, taking you back in 3 seconds.";
setTimeout(function(){
    document.getElementById("redirect").innerHTML = "Page not found, taking you back in 2 seconds."
    setTimeout(function(){
        document.getElementById("redirect").innerHTML = "Page not found, taking you back in 1 second."
        setTimeout(function(){
            window.location.replace("index.html");
        }, 1000);;
    }, 1000);
}, 1000)