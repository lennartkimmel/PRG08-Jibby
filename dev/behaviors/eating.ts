class Eating extends Behavior{

    private jibby   :   Jibby

    constructor(jibby: Jibby){
        super()
        this.jibby = jibby
    }
    public performBehavior(): void {

        if(this.counter == 0){
            this.jibby.food += 10
            this.jibby.div.style.backgroundImage = "url('images/eating.png')"
        } else if(this.counter > 60){
            this.onTimerFinished()
        }

        this.counter++
    }
    public onTimerFinished() {
        this.jibby.myBehavior = new Idle(this.jibby)
    }
}