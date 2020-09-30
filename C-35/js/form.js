class Form{
    constructor(){

    }
    display (){
        var title= createElement('h1')
        title.html("Car Racing Game")
        title.position(70,0)
        var input=createInput();
        input.position(130,160)
        var button=createButton("play");
        button.position(145,200)
        button.style("width","95px")
        button.style("height","95px")
        button.style("backgroundColor","lightblue")
        title.style("color","red")
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting= createElement('h3')
            greeting.html("Hello "+name);
            greeting.position(130,160);
        })
    }
}
