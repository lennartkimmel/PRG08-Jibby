# PRG08-Week3-oefening1

## Jibby

Jibby is een [tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi) die je in leven zal moeten houden. Dit doe je door hem aandacht te geven, eten te geven en schoon te houden. Wanneer je je aandacht laat wegzakken en Jibby niet goed onderhoudt zal Jibby doodongelukkig worden! Je kunt Jibby in leven houden door:

- Douchen. Het douchen duurt 4 seconden en na het douchen zal Jibby automatisch terug naar de Idle status.
- Eten. Het eten duurt 3 seconden en ook hierna komt Jibby automatisch in zijn Idle status terug.
- Aaien. Door met de muis op Jibby te klikken geef je hem aandacht en zal zijn tevredenheid toenemen. Als je te vaak aan hem zit raakt wordt hij boos.

## Opdracht

- Gebruik het strategy pattern om het gedrag van Jibby te programmeren. Begin met Idle, Sleeping en Dead. Implementeer de bestaande interface.
- In de game loop roep je de update functie van jibby aan. Jibby roept daarna de update functie van zijn huidige gedrag aan.
- Het idle gedrag vermindert bij elke update de health, food en happyness waarden.
- Als daarna het voedsel, hygiene of happyness op 0 komt krijgt Jibby het 'Dead' gedrag.
- Als de waarden bijna bij 0 zijn kan je een gedrag tonen voor Hungry, Angry of Dirty!
- Bekijk de voorbeeldcode van de strategy. Hier zie je hoe je vanuit het Idle gedrag weer een ander gedrag aan jibby kan toekennen.

## Automatisch gedrag

- Elk gedrag krijgt een timer waarde. In de update van het gedrag verminder je die waarde. Na een aantal seconden verander je van gedrag.
- Idle gaat naar sleeping. Elk ander gedrag gaat naar Idle. Dead verandert niet.

## Buttons

- Maak drie nieuwe gedragingen: Eating, Washing, Happy
- De drie click eventListeners en handlers staan in jibby.ts
- De click handlers van Jibby verwijzen weer door naar de `onEat()`, `onWash()` en `onPet()` functies **van het huidige gedrag**.
- Op die manier kan Jibby anders op de knoppen reageren als hij iets aan het doen is.
- Wat gebeurt er als je Jibby aait terwijl hij aan het eten is? Wat gebeurt er als je hem wast terwijl hij slaapt?
- Wat zou er gebeuren als je Jibby aanraakt terwijl hij dood is... :(

## Resultaat

![Jibby](jibbyresult.png?raw=true "Jibby")

[Speel de Jibby Game](https://hr-cmgt.github.io/PRG08-Week3-oefening2-completed/)

## Strategy Pattern Voorbeeld

```
class Jibby {
    public myBehavior:Behavior
    constructor(){
        this.myBehavior = new Jumping(this)
    }
    public update(){
        this.myBehavior.update()
    }
}

class Jumping implements Behavior {
    public jibby : Jibby
    constructor(j:Jibby){
        this.jibby = j
    }
    public update(){
        // het gedrag van Jibby aanpassen
        this.jibby.myBehavior = new Sleeping(this.jibby)
    }
}

interface Behavior {
    jibby:Jibby
    update() : void
}
```

### Event Listeners 

De game heeft drie click listeners. De code voor de 'onClick' handlers staat in het gedrag.

```
class Jibby {
    constructor(){
        // listener toevoegen
        washButton.addEventListener("click", (e:MouseEvent) => this.onWash(e))
    }

    private onWash(e:MouseEvent):void {
        // hier de wash handler van het huidige gedrag aanroepen
    }
}
```
### Afbeeldingen aanpassen

`element.style.backgroundImage = "url('idle.png')"`
