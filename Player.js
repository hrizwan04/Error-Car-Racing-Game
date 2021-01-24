class Player{
    counstrutor(){
        this.index=null
        this.distance=0
        this.name=null

    }
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    //.set and .update are 2 functions used to writing on the database
    //the only difference between the 2 is .update can only write on prexisting datafields
    //.set is capable of creating a new datafield 
    update(){
        var playerindex="players/player"+this.index
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayerinfo(){
        var playerinfo=database.ref("players")
        playerinfo.on("value",(data)=>{
        allPlayers=data.val()
         })
            
    }

}