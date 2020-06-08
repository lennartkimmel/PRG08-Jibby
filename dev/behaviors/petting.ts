class Petting extends Behavior{

    private jibby   :   Jibby

    constructor(jibby: Jibby){
        super()
        this.jibby = jibby
    }
    public performBehavior(): void {

        // if(this.timer == 0) {
            
        //     this.jibby.happyness += 2
        //     this.jibby.div.style.backgroundImage = "url('images/happy.png')"
            
        //     this.timer = setTimeout(() => {
        //         this.onTimerFinished();
        //     }, 2000);
        // }


        if(this.counter == 0){
            this.jibby.happyness += 2
            this.jibby.div.style.backgroundImage = "url('images/happy.png')"
        } else if(this.counter > 60){
           this.onTimerFinished()
        }

        this.counter++


    }

    public onTimerFinished() {
        this.jibby.myBehavior = new Idle(this.jibby)
    }
}