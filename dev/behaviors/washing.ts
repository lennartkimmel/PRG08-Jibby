class Washing extends Behavior{

    private jibby   :   Jibby

    constructor(jibby: Jibby){
        super()
        this.jibby = jibby
    }
    public performBehavior(): void {

        if(this.counter == 0){
            this.jibby.hygiene += 10
            this.jibby.div.style.backgroundImage = "url('images/washing.png')"
        } else if(this.counter > 120){
            this.onTimerFinished()
        }

        this.counter++
    }

    public onTimerFinished() {
        this.jibby.myBehavior = new Idle(this.jibby)
    }
}