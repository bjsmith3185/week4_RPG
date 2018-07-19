

$( document ).ready(function() {
   
    $(".container-welcome").show();
    $(".container-select-user").hide();
    $(".container-select-enemy").hide();
    $(".container-game").hide();
    $(".container-win").hide();
    $(".container-loss").hide();

    var sprites = {
        "walker": {
            name: "walker",
            image: "assets/images/walker.jpg",
            health: 1012,
            attack: 5,
            counter: 120,
        },
    
        "trivette": {
            name: "trivette",
            image: "assets/images/trivette.jpg",
            health: 18,
            attack: 10,
            counter: 6,
        },
    
        "cb": {
            name: "cb",
            image: "assets/images/cb.jpg",
            health: 12,
            attack: 8,
            counter: 5,
        },
    
        "gage": {
            name: "gage",
            image: "assets/images/gage.jpg",
            health: 16,
            attack: 7,
            counter: 4,
        },
    };

    var userHP;
    var userAttack;
    var userImg;
    var userName;
    var otherCharacters;
    var enemyHP;
    var enemyCounter;
    var enemyName;
    var enemyImg;
    var count = 3;

// reset function 
    function reset() {
        $(".container-welcome").show();
        $(".container-select-user").hide();
        $(".container-select-enemy").hide();
        $(".container-game").hide();
        $(".container-win").hide();
        $(".container-loss").hide();
        
        $("#start-select").empty();
        $(".enemy-list").empty();   
        
        userHP;
        userAttack;
        userImg;
        userName;
        otherCharacters;
        enemyHP;
        enemyCounter;
        enemyName;
        enemyImg;
        count = 3;
    };


// display sprites to div area 
    function displaySprite(pass) {
        var boxName = $("<div>").attr("data-name", pass.name).attr("data-health",pass.health).attr("data-attack", pass.attack).attr("data-counter", pass.counter).attr("data-img", pass.image).addClass("sprite", "text-center");
        var boxTitle = $("<p>").addClass("title", "text-center").text(pass.name);
        var boxPic = $("<img>").attr("src", pass.image).addClass("sprite-img", "text-center");
        var boxInfo = $("<p>").addClass("info", "text-center").text("Health: " + pass.health);
        boxName.append(boxTitle).append(boxPic).append(boxInfo);
        $("#start-select").append(boxName);
    };


// welcome button area 

    $("#welcome-btn").on("click", function() {
        $(".container-welcome").hide();
        $(".container-select-user").show();
        $(".container-select-enemy").hide();
        $(".container-game").hide();
        $(".container-win").hide();
        $(".container-loss").hide();

        for (var key in sprites) {
          displaySprite(sprites[key]);
        };
    });

// pick users sprite area 

    $(".container-select-user").on("click", ".sprite", function() {
        userHP = parseInt($(this).attr("data-health"));
        userAttack = parseInt($(this).attr("data-attack"));
        userName = $(this).attr("data-name");
        userImg = $(this).attr("data-img");
                
        $(this).detach().appendTo(".userSprite-game");
      
        otherCharacters = $(".sprite").not(this);
        $(otherCharacters).detach().appendTo(".enemy-list");
         
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
        enemyCounter = parseInt($(this).attr("data-counter"));
        enemyName = $(this).attr("data-name");
        enemyImg = $(this).attr("data-img");
      
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
        // math for determining health points 
        enemyHP -= userAttack;
        userHP -= enemyCounter;
        userAttack += userAttack;

        $(".user .info").text("Helath: " + userHP);
        $(".enemy .info").text("Health: " + enemyHP);

        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/sound/whack.mp3");
        audioElement.play();


        if (userHP < 0) {  // enemy wins
            $(".userSprite-game").empty();  
            $(".enemySprite-game").empty();
            $(".container-loss").show();
            $(".container-game").hide();
            var losser = $(".loss-img");
            var losserTitle = $("#loss-name");
            setImage(losser, enemyImg, losserTitle, userName);

        } else if (enemyHP < 0) {
            count--;

            if (count === 0) {  // you win 
                $(".enemySprite-game").empty()   
                $(".userSprite-game").empty();
                $(".container-win").show()
                $(".container-game").hide();
                var winner = $(".winning-img");
                var winnerTitle = $("#win-name");
                setImage(winner, userImg, winnerTitle, userName);

                var audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/sound/TexasRanger.mp3");
                audioElement.play();

            } else {  // enemy defeated with more to choose from
                $(".enemySprite-game").empty();
                $(".container-select-enemy").show();
                $(".container-game").hide();
            };
            
        };
       
        // displays the name and image of winner or loser 
        function setImage(a,b,x,y) {
            a.attr("src", b);
            x.text(y);
        };
    });
    
    $("#reset-win").on("click", function() {
        reset();
    });

    $("#reset-loss").on("click", function() {
        reset();
    });

});
