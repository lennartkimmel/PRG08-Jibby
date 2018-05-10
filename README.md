# PRG08 Week3 oefening1

## Jibby

Jibby is een [tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi) die je in leven moet houden. Dit doe je door hem aandacht en eten te geven, en schoon te houden. Wanneer je Jibby niet goed verzorgt zal hij dood gaan door een gebrek aan eten, aandacht of hygiene.

Gebruik het **strategy pattern** om het gedrag van Jibby te programmeren. Elk gedrag kan de eigenschappen van Jibby veranderen op een andere manier. 

## Bouw de applicatie

- Bouw Jibby met een **Idle** gedrag en drie stats (honger, hygiene, happyness)
- Jibby checkt in de update functie of zijn stats te laag worden, als een stat onder 0 komt wordt het gedrag **Dead**
- Daarna roept Jibby de update functie van zijn gedrag aan.

Gedag
- Idle: hierin gaan alle stats geleidelijk omlaag.
- Dead: hierin gebeurt niets.

## Bouw de interface

- Klik op jibby en op de rode knoppen om het gedrag te veranderen.
- Jibby heeft keypress event listeners, hiermee roept hij event handlers aan die in het gedrag staan!
- Als jibby dood is reageert hij niet meer...

Gedrag
- Douchen: de hygiene en happyness gaan omhoog
- Eten: Jibby krijgt minder honger
- Aaien: de happyness gaat omhoog

## Bouw een timer

In de update functie van het gedrag hou je een **counter** bij. Gebruik de counter om:
- Douchen en Eten: na een tijdje gaat Jibby automatisch terug naar de Idle status.
- Idle: na een tijdje valt Jibby in slaap. Maak een nieuw Sleeping gedrag. Bedenk zelf wat er gebeurt met met gebruikersinput als Jibby slaapt!

## Complex gedrag

- Maak een Angry gedrag
- Jibby wordt boos als je hem aait terwijl hij eet of als hij onder de douche staat
- Jibby wordt boos als je hem onder de douche zet terwijl hij slaapt
- Kan je nog meer gedrag bedenken? Wat gebeurt er als je hem aanraakt als hij dood is?

## Resultaat

![Jibby](jibbyresult.png?raw=true "Jibby")

[Speel de Jibby Game](https://hr-cmgt.github.io/PRG08-Week3-oefening1-completed/)

## Strategy Pattern

```
class Jibby {
    public behaviour:Behavior
    constructor(){
        this.behaviour = new Jumping(this)
    }
    public update(){
        this.behaviour.update()
    }
}

class Jumping implements Behaviour {
    public jibby : Jibby
    constructor(j:Jibby){
        this.jibby = j
    }
    public update(){
    }
}

interface Behaviour {
    jibby:Jibby
    update() : void
}
```

### Event Listeners 

Jibby heeft event listeners. De event handlers staan in het gedrag.

```
class Jibby {
    constructor(){
        washButton.addEventListener("click", (e:MouseEvent) => this.onWash(e))
    }

    private onWash(e:MouseEvent):void {
        this.behaviour.onWash()
    }
}
```
### Afbeeldingen aanpassen

`element.style.backgroundImage = "url('idle.png')"`
