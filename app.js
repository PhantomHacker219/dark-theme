let Mainwrap = document.querySelector(".wrappper")
let circle = document.querySelector(".circle")


let sun = document.getElementById("sun")
let moon = document.getElementById("moon")

Mainwrap.addEventListener("click", darktheme)

function darktheme(){
    circle.classList.toggle("active")

 

    if(circle.classList.contains("active")){
        document.body.style = "background-color: #000;"
        Mainwrap.style = "border-color: #fff;"
        sun.style = "display: block;"
        moon.style = "display: none;"
        circle.style = "transform: translateX(60px) rotate(360deg); transition: .5s;"
        localStorage.setItem("Darkmode", "true")
    }

    else{
        document.body.style = "background-color: #fff"
        Mainwrap.style = "border-color: #000;"
        sun.style = "display: none;"
        moon.style = "display: block;"
        circle.style = "transform: translateX(0) rotate(-360deg); transition: .5s;"
        localStorage.setItem("Darkmode", "false")
    }
}
                                                                                         

if(localStorage.getItem("Darkmode") === "true"){
    document.body.style = "background-color: #000;"
    Mainwrap.style = "border-color: #fff;"
    sun.style = "display: block;"
    moon.style = "display: none;"
    circle.style = "transform: translateX(60px) rotate(360deg); transition: .5s;"
    localStorage.setItem("Darkmode", "true")
}
else{
    document.body.style = "background-color: #fff"
    Mainwrap.style = "border-color: #000;"
    sun.style = "display: none;"
    moon.style = "display: block;"
    circle.style = "transform: translateX(0) rotate(-360deg); transition: .5s;"
    localStorage.setItem("Darkmode", "false")
}
