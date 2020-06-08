class Idle extends Behavior{

    private jibby : Jibby

    // private currentBehaviour: String = this.jibby.myBehavior.constructor.name
    

    constructor(jibby: Jibby){
        super()
        this.jibby = jibby
    }

    public performBehavior(): void {
       
        this.jibby.hygiene -= 0.01
        this.jibby.food -= 0.02
        this.jibby.happyness -= 0.015

        // console.log(this.jibby.myBehavior.constructor.name)
        
        this.jibby.div.style.backgroundImage = "url('images/idle.png')"

        if (this.jibby.hygiene <= 10){
            this.jibby.div.style.backgroundImage = "url('images/dirty.png')"
        }
        if(this.jibby.food <= 10 ){
            this.jibby.div.style.backgroundImage = "url('images/hungry.png')"
        }
        if (this.jibby.happyness <= 10){
            this.jibby.div.style.backgroundImage = "url('images/sad.png')"
        }

        // if(this.currentBehaviour == "Idle" && this.counter > 30){
        //     this.jibby.div.style.backgroundImage = "url('images/sleeping.png')"
        // }
    }

    public update():void {
        if(this.counter > 30){
            this.jibby.div.style.backgroundImage = "url('images/sleeping.png')"
        }
        this.counter++
        console.log("je komt hier langs")
    }
}