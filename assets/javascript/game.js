

$( document ).ready(function() {
   
    $(".container-welcome").show();
    $(".container-select-user").hide();
    $(".container-select-enemy").hide();
    $(".container-game").hide();
    $(".container-win").hide();
    $(".container-loss").hide();

    var userSelected = false;
    var userHP;
    var userAttack;
    var userCounter;
    var userImg;
    var userName;
    var otherCharacters;

    var enemyHP;
    var enemyAttack;
    var enemyCounter;
    var enemyName;

    var count = 3;

var sprites = {
    "walker": {
        name: "walker",
        image: "assets/images/walker.jpg",
        health: 22,
        attack: 13,
        counter: 5,
    },

    "trivette": {
        name: "trivette",
        image: "assets/images/trivette.jpg",
        health: 18,
        attack: 10,
        counter: 6,
    },

    "cb": {
        name: "cn",
        image: "assets/images/cb.jpg",
        health: 10,
        attack: 8,
        counter: 5,
    },

    "gage": {
        name: "gage",
        image: "assets/images/gage.jpg",
        health: 12,
        attack: 7,
        counter: 4,
    },
};


    $("#welcome-btn").on("click", function() {
        $(".container-welcome").hide();
        $(".container-select-user").show();
        $(".container-select-enemy").hide();
        $(".container-game").hide();
        $(".container-win").hide();
        $(".container-loss").hide();

        function displaySprite(pass) {
            var boxName = $("<div>").attr("data-name", pass.name).attr("data-health",pass.health).attr("data-attack", pass.attack).attr("data-counter", pass.counter).addClass("sprite", "text-center");
            var boxTitle = $("<p>").addClass("title", "text-center").text(pass.name);
            var boxPic = $("<img>").attr("src", pass.image).addClass("sprite-img", "text-center");
            var boxInfo = $("<p>").addClass("info", "text-center");
            boxName.append(boxTitle).append(boxPic).append(boxInfo);
            $("#start-select").append(boxName);
        };
      
      
        for (var key in sprites) {
          displaySprite(sprites[key]);
        };

    });

// pick users sprite area 

    $(".container-select-user").on("click", ".sprite", function() {
        
        userHP = parseInt($(this).attr("data-health"));
        userAttack = parseInt($(this).attr("data-attack"));
        userCounter = parseInt($(this).attr("data-counter"));
        userName = $(this).attr("value");
        
        // console.log(typeof(userHP));
        
        $(this).detach().appendTo(".userSprite-game");
        

        otherCharacters = $(".sprite").not(this);
        $(otherCharacters).detach().appendTo(".enemy-list");
                // console.log(otherCharacters); 
        
        $(".container-welcome").hide();
        $(".container-select-user").hide();
        $(".container-select-enemy").show();
        $(".container-game").hide();
        $(".container-win").hide();
        $(".container-loss").hide();
    });

// // pick first enemy 

// $(".container-select-enemy").on("click", ".sprite",  function() {
        
//     enemyHP = parseInt($(this).attr("data-health"));
//     enemyAttack = parseInt($(this).attr("data-attack"));
//     enemyCounter = parseInt($(this).attr("data-counter"));
//     enemyName = $(this).attr("value");
    
   

//     $(this).detach().appendTo(".enemySprite-game");
    
    
//     $(".container-welcome").hide();
//     $(".container-select-user").hide();
//     $(".container-select-enemy").hide();
//     $(".container-game").show();
//     $(".container-win").hide();
//     $(".container-loss").hide();
// });


//     $("#attack").on("click", function() {
//         console.log("this is enemyName: " + enemyName + "user name: " + userName);
//         enemyHP -= userAttack;
//         userHP -= enemyCounter;
//         userAttack += userAttack;

//         // console.log("User HP: " + userHP + "  Attack: " + userAttack + "  counter: " + userCounter + "  name: " + userName);

//         // console.log("Enemy HP: " + enemyHP + "  Attack: " + enemyAttack + "  counter: " + enemyCounter + "  name: " + enemyName);

//         // userImg = $(".user .sprite-img").attr("src");
//         // console.log("this is img src: " + userImg);

//         // enemyImg = $(".enemy .sprite-img").attr("src");
//         // console.log("this is enemy img src: " + enemyImg);

//         $(".user .info").text("HP: " + userHP);
//         $(".enemy .info").text("HP: " + enemyHP);


//             // if statements for the game 
//         if (userHP < 0) {
//             gameOver = true;
//             $(".container-loss").show();
//             $(".container-game").hide();
//             var losser = $(".loss-img");
//             setImage(losser, enemyName);

//         } else if (enemyHP < 0) {
//             nextEnemy = true;
//             count--;

//             if (count === 0) {
//                 $(".container-win").show()
//                 $(".container-game").hide();
//                 var winner = $(".winning-img");
//                 setImage(winner, userName);

//             } else {
//                 $(".enemySprite-game").empty();
//                 $(".container-select-enemy").show();
//                 $(".container-game").hide();

//             }
            
//         }
       

//         function setImage(y,x) { //l
//             // console.log("this is enemyName: " + enemyName + "user name: " + userName);
            
          
//             if (x === "sprite-1") {
//                 $(y).attr("src", "assets/images/walker.jpg");
//             } else if (x === "sprite-2") {
//                 $(y).attr("src", "assets/images/cb.jpg");
//             } else if (x === "sprite-3") {
//                 $(y).attr("src", "assets/images/trivette.jpg");
//             } else if (x === "sprite-4") {
//                 $(y).attr("src", "assets/images/gage.jpg");
//             }
//         };

//     });

//     function reset() {
//         $(".container-welcome").show();
//         $(".container-select-user").hide();
//         $(".container-select-enemy").hide();
//         $(".container-game").hide();
//         $(".container-win").hide();
//         $(".container-loss").hide();
//     };

//     $("#reset-win").on("click", function() {
//         reset();
//     });

//     $("#reset-loss").on("click", function() {
//         reset();
//     });

});
