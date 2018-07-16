

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
        health: 12,
        attack: 3,
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

// var count1 = sprites.keys.length;
// console.log(count1 + " this is object length");


    $("#welcome-btn").on("click", function() {
        $(".container-welcome").hide();
        $(".container-select-user").show();
        $(".container-select-enemy").hide();
        $(".container-game").hide();
        $(".container-win").hide();
        $(".container-loss").hide();

        function displaySprite(pass) {
            var boxName = $("<div>").attr("data-name", pass.name).attr("data-health",pass.health).attr("data-attack", pass.attack).attr("data-counter", pass.counter).attr("data-img", pass.image).addClass("sprite", "text-center");
            var boxTitle = $("<p>").addClass("title", "text-center").text(pass.name);
            var boxPic = $("<img>").attr("src", pass.image).addClass("sprite-img", "text-center");
            var boxInfo = $("<p>").addClass("info", "text-center").text("Health: " + pass.health);
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
        userName = $(this).attr("data-name");
        userImg = $(this).attr("data-img");

                
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

// pick first enemy 

$(".container-select-enemy").on("click", ".sprite",  function() {
        
    enemyHP = parseInt($(this).attr("data-health"));
    enemyAttack = parseInt($(this).attr("data-attack"));
    enemyCounter = parseInt($(this).attr("data-counter"));
    enemyName = $(this).attr("data-name");
    enemyImg = $(this).attr("data-img");
    console.log("this is enemyImg: " + enemyImg);
    
   

    $(this).detach().appendTo(".enemySprite-game");
    
    
    $(".container-welcome").hide();
    $(".container-select-user").hide();
    $(".container-select-enemy").hide();
    $(".container-game").show();
    $(".container-win").hide();
    $(".container-loss").hide();
});

    // attack area 

    $("#attack").on("click", function() {
        console.log("this is enemyName: " + enemyName + "user name: " + userName);
        enemyHP -= userAttack;
        userHP -= enemyCounter;
        userAttack += userAttack;


        $(".user .info").text("Helath: " + userHP);
        $(".enemy .info").text("Health: " + enemyHP);

        console.log("enemy Image: " + enemyImg);
            // if statements for the game 
        if (userHP < 0) {
            console.log("what");
            gameOver = true;
            $(".container-loss").show();
            $(".container-game").hide();
            var losser = $(".loss-img");
            var losserTitle = $("#loss-name");
            setImage(losser, enemyImg, losserTitle, userName);

        } else if (enemyHP < 0) {
            nextEnemy = true;
            count--;

            if (count === 0) {
                $(".container-win").show()
                $(".container-game").hide();
                var winner = $(".winning-img");
                var winnerTitle = $("#win-name");
                setImage(winner, userImg, winnerTitle, userName);

            } else {
                $(".enemySprite-game").empty();
                $(".container-select-enemy").show();
                $(".container-game").hide();

            }
            
        }
       
        function setImage(a,b,x,y) {
            a.attr("src", b);
            x.text(y);

        };







        // function setImage(y,x) { //l
        //     // console.log("this is enemyName: " + enemyName + "user name: " + userName);
            
          
        //     if (x === "sprite-1") {
        //         $(y).attr("src", "assets/images/walker.jpg");
        //     } else if (x === "sprite-2") {
        //         $(y).attr("src", "assets/images/cb.jpg");
        //     } else if (x === "sprite-3") {
        //         $(y).attr("src", "assets/images/trivette.jpg");
        //     } else if (x === "sprite-4") {
        //         $(y).attr("src", "assets/images/gage.jpg");
        //     }
        // };

    });

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
