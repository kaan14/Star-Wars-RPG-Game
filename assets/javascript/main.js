


//$("document").ready(function(){


//declare all the variables here 
var isClicked = false;
var fighterOne;
var fighterTwo;
var click;
var audio =  new Audio("http://soundbible.com/mp3/Short_triumphal_fanfare-John_Stracke-815794903.mp3"); 


//declare the objects here
var albert = {
    name: "albert",
    power: 200,
    health: 100,
    id: "#albert-hp"
};
var tesla = {
    name: "tesla",
    power: 160,
    health: 99,
    id: "#tesla-hp"
};
var marie = {
    name: "marie",
    power: 180,
    health: 100,
    id: "#marie-hp"
};
var edison = {
    name: "edison",
    power: 10,
    health: 900,
    id: "#edison-hp"
}

/* (*) (*) */
//change the warrior's health-power in html.   
function renderHealth(hp) {
    $(hp["id"]).html(hp["health"]);
}

renderHealth(albert);
renderHealth(tesla);
renderHealth(marie);
renderHealth(edison);






//2nd method doing this. 
//.characters is the parent and .restyle is child and $(.ID1 . ID2) will help us reaching to IDs. 
//assign the fighterOne and fighterTwo here and that way we can avoid multiple clicks cause an issue. 
//window[window[$(this).attr("id")]] is a way to match the selected html element with js defined object. since the variables are global, they are avaliable in global
// create function that moves the characters around
function determineFighters() {
    $(".characters .restyle").on("click", function () {
        if (fighterOne == null) {
            $(this).appendTo(".your-fighter").css("float", "none");
            fighterOne = window[$(this).attr("id")];
            console.log(fighterOne);
            $(".characters .restyle").appendTo(".enemies-available");
        } else if (fighterTwo == null) {
            $(this).appendTo(".defender"); //.css("float", "none");
            fighterTwo = window[$(this).attr("id")];
            console.log(fighterTwo);

        }
    });
}



///


// generate a random number 
function random(power) {

    var y = ((Math.floor(Math.random() * 2) + 1) / 10);
    console.log(y);
    return power * y;
}

determineFighters();

function createSection() {
    $(".showActions").append("<p></p>").css("color", "white").css("float", "right");

}
createSection();

//how would I know which character is equivelent in the object?
$(".attack-button").on("click", function () {
    renderHealth(fighterOne);
    console.log("done");
    var hitOne = random(fighterOne.power);
    var hitTwo = random(fighterTwo.power);

    fighterOne["health"] -= hitTwo;
    fighterTwo["health"] -= hitOne;

    renderHealth(fighterOne);
    renderHealth(fighterTwo);

    $(".showActions").html("Fighter One hit with: " + random(fighterOne.power));
    $(".showActions").append("<p>" + "Fighter Two hit with: " + random(fighterTwo.power) + "</p>");

    if (fighterOne.health <= 0) {
        alert("Game Over! Start Over");
        location.reload();
    }
    else if (fighterTwo.health <= 0) {
        $(".defender .restyle").css("display", "none");
        fighterOne.health *= 1.4 ;  
        fighterTwo = null;
        console.log("you lost");
        audio.play(); 
    }
});


// create function that moves the characters around
/*function DetermineFighters() {
    //if isClicked is false, than proceed below
    if (!isClicked) {
        $("#albert").on("click", function () {
            //console.log("clicked");
            $("#albert").appendTo(".your-fighter").css("float", "none");
            $("#tesla").appendTo(".enemies-available");
            $("#marie").appendTo(".enemies-available");
            $("#edison").appendTo(".enemies-available");
            isClicked = true;
        });
    }
    if (!isClicked) {
        $("#tesla").on("click", function () {
            //console.log("clicked");
            //$("#tesla").appendTo(".your-character");
            $("#albert").appendTo(".enemies-available");
            $("#marie").appendTo(".enemies-available");
            $("#edison").appendTo(".enemies-available");
            isClicked = true;
        });
    }
    if (!isClicked) {
        $("#marie").on("click", function () {
            //console.log("clicked");
            //$("marie").appendTo(".your-character");
            $("#albert").appendTo(".enemies-available");
            $("#tesla").appendTo(".enemies-available");
            $("#edison").appendTo(".enemies-available");
            isClicked = true;
        });
    }
    if (!isClicked) {
        $("#edison").on("click", function () {
            //console.log("clicked");
            //$("edison").appendTo(".your-character");
            $("#albert").appendTo(".enemies-available");
            $("#tesla").appendTo(".enemies-available");
            $("#marie").appendTo(".enemies-available");
            isClicked = true;
        });

    }
}*/

//if class enemies-avaliable has an elements and one of them is pressed again, move $(this) to .defender section
//$(".enemies-available").on("click", ".restyle", function () {
    //$(this).appendTo(".defender");
//});


//$(".defender").on("click", function () {
    //console.log(isClicked);
//});


// $(".defender").on("click", function () {
//       var checkThere = $("div:contains('.enemies-available')").html("img");
// console.log(checkThere); 
// }); 

// function Health(ig){
//     $(ig["id"]).html(ig[health]); 

// }





