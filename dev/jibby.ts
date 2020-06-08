class Jibby {

    public hygiene:     number
    public food:        number
    public happyness:   number

    public div:         HTMLElement
    public x:           number
    public y:           number

    public myBehavior: Behavior
            
    constructor(parent:HTMLElement) {
        this.div = document.createElement("jibby")
        parent.appendChild(this.div)

        // start instellingen
        this.x = 0
        this.y = 220
        this.hygiene = this.food = this.happyness = 20

        // 'Default behaviour'
        this.myBehavior = new Idle(this)

        // click listeners
        this.div.addEventListener("click", () => this.onPet())
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat())
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash())
    }

    public update():void {
        // hier het gedrag updaten
        this.myBehavior.performBehavior()

        // check of de waarden te laag zijn
        
        if (this.hygiene <= 0 || this.food <= 0 || this.happyness <= 0){
            this.myBehavior = new Dead (this)
        }
    }

    private onPet():void {
        this.myBehavior = new Petting(this)
    }

    private onWash():void {
        this.myBehavior = new Washing(this)
    }

    private onEat():void {
        this.myBehavior = new Eating(this)
    }
}