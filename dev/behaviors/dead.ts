class Dead extends Behavior{

    private jibby : Jibby

    constructor(jibby: Jibby){
        super()
        this.jibby = jibby
    }
    public performBehavior(): void {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')"
    }
}