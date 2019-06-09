//Getting the bulb text
let default_bulb_text = document.querySelector("#dark-mode-area p");
//Getting the default light bulb
let default_bulb = document.querySelector("#dark-mode-area i");

$(default_bulb).mouseover(function(){
    $(default_bulb_text).animate({
        marginTop: "-=30",
        fontSize: "30px",
        opacity: 1.0
    }, 200);
});
$(default_bulb).mouseout(function(){
    $(default_bulb_text).animate({
        marginTop: "+=30px",
        fontSize: "10px",
        opacity: 0.0
    }, 200);
});

//Creating a White Light Bulb
let white_bulb = document.createElement("div");
$(white_bulb).mouseover(function(){
    $(default_bulb_text).animate({
        marginTop: "-=30",
        fontSize: "30px",
        opacity: 1.0
    }, 200);
});
$(white_bulb).mouseout(function(){
    $(default_bulb_text).animate({
        marginTop: "+=30px",
        fontSize: "10px",
        opacity: 0.0
    }, 200);
});

//When Dark Mode Light Bulb is Clicked
const make_dark_mode = () => {
    body.style.backgroundColor = "black";
    default_bulb_text.style.color = "white";
    default_bulb_text.style.marginTop = "10px";
    default_bulb_text.style.opacity = "0.0";
    default_bulb_text.textContent = "Light Mode";
}
//Replace Dark Bulb with White Bulb
const replace_black_bulb= () => {
    white_bulb.innerHTML = "<i class='fas fa-lightbulb'></i>"
    white_bulb.style.color = "white";
    default_bulb.parentNode.replaceChild(white_bulb, default_bulb);
    white_bulb.style.marginRight = "100%";
}
//When Light Mode Light Bulb is Clicked
const make_light_mode = () => {
    body.style.backgroundColor = "white";
    default_bulb_text.style.color = "black";
    default_bulb_text.style.marginTop = "10px";
    default_bulb_text.style.opacity = "0.0";
    default_bulb_text.textContent = "Dark Mode";
}
//Replace White Bulb with Default Bulb
const replace_white_bulb = () => {
    white_bulb.parentNode.replaceChild(default_bulb, white_bulb);
}



/****************** CLEANER FUNCTIONS ************************/
//Dark Bulb is Pressed
const dark_bulb_pressed = () => {
    make_dark_mode(); 
    replace_black_bulb();
}
default_bulb.addEventListener("click", dark_bulb_pressed, false);
//White Bulb is Pressed
const white_bulb_pressed = () => {
    make_light_mode();
    replace_white_bulb();
}
white_bulb.addEventListener("click", white_bulb_pressed, false);
