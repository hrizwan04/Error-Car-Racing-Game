class Form{
    constructor(){ 
        // creating 4 properties of form class, any object will have inpuy,button,greeting,title
        this.input=createInput("Name")
        this.button=createButton("Play")
        this.greeting=createElement("h2")
        this.title=createElement("h2")

    }
    hide(){
        // hide() a readymade fuction used for hiding the elements
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    Display(){
        this.title.html("Car Racing Game") //.html you write text want to show and elemnt is font
        this.title.position(130,0)
        this.input.position(130,160)
        this.button.position(250,200)

        //*()=>* is a concise way of writing *function()*
        //*(data)=>* is a concise way of writing *function(data)*
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            console.log(playerCount)
            console.log(player.name)
            player.index=playerCount 
            console.log(player.index)
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello "+player.name)
            this.greeting.position(130,100)
        })
    }
}