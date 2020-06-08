"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 20;
        this.myBehavior = new Idle(this);
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
    }
    Jibby.prototype.update = function () {
        this.myBehavior.performBehavior();
        if (this.hygiene <= 0 || this.food <= 0 || this.happyness <= 0) {
            this.myBehavior = new Dead(this);
        }
    };
    Jibby.prototype.onPet = function () {
        this.myBehavior = new Petting(this);
    };
    Jibby.prototype.onWash = function () {
        this.myBehavior = new Washing(this);
    };
    Jibby.prototype.onEat = function () {
        this.myBehavior = new Eating(this);
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Behavior = (function () {
    function Behavior() {
        this.counter = 0;
    }
    Behavior.prototype.performBehavior = function () {
    };
    Behavior.prototype.onTimerFinished = function () {
    };
    return Behavior;
}());
var Dead = (function (_super) {
    __extends(Dead, _super);
    function Dead(jibby) {
        var _this = _super.call(this) || this;
        _this.jibby = jibby;
        return _this;
    }
    Dead.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    return Dead;
}(Behavior));
var Eating = (function (_super) {
    __extends(Eating, _super);
    function Eating(jibby) {
        var _this = _super.call(this) || this;
        _this.jibby = jibby;
        return _this;
    }
    Eating.prototype.performBehavior = function () {
        if (this.counter == 0) {
            this.jibby.food += 10;
            this.jibby.div.style.backgroundImage = "url('images/eating.png')";
        }
        else if (this.counter > 60) {
            this.onTimerFinished();
        }
        this.counter++;
    };
    Eating.prototype.onTimerFinished = function () {
        this.jibby.myBehavior = new Idle(this.jibby);
    };
    return Eating;
}(Behavior));
var Idle = (function (_super) {
    __extends(Idle, _super);
    function Idle(jibby) {
        var _this = _super.call(this) || this;
        _this.jibby = jibby;
        return _this;
    }
    Idle.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        if (this.jibby.hygiene <= 10) {
            this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
        }
        if (this.jibby.food <= 10) {
            this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
        }
        if (this.jibby.happyness <= 10) {
            this.jibby.div.style.backgroundImage = "url('images/sad.png')";
        }
    };
    Idle.prototype.update = function () {
        if (this.counter > 30) {
            this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
        }
        this.counter++;
        console.log("je komt hier langs");
    };
    return Idle;
}(Behavior));
var Petting = (function (_super) {
    __extends(Petting, _super);
    function Petting(jibby) {
        var _this = _super.call(this) || this;
        _this.jibby = jibby;
        return _this;
    }
    Petting.prototype.performBehavior = function () {
        if (this.counter == 0) {
            this.jibby.happyness += 2;
            this.jibby.div.style.backgroundImage = "url('images/happy.png')";
        }
        else if (this.counter > 60) {
            this.onTimerFinished();
        }
        this.counter++;
    };
    Petting.prototype.onTimerFinished = function () {
        this.jibby.myBehavior = new Idle(this.jibby);
    };
    return Petting;
}(Behavior));
var Washing = (function (_super) {
    __extends(Washing, _super);
    function Washing(jibby) {
        var _this = _super.call(this) || this;
        _this.jibby = jibby;
        return _this;
    }
    Washing.prototype.performBehavior = function () {
        if (this.counter == 0) {
            this.jibby.hygiene += 10;
            this.jibby.div.style.backgroundImage = "url('images/washing.png')";
        }
        else if (this.counter > 120) {
            this.onTimerFinished();
        }
        this.counter++;
    };
    Washing.prototype.onTimerFinished = function () {
        this.jibby.myBehavior = new Idle(this.jibby);
    };
    return Washing;
}(Behavior));
//# sourceMappingURL=main.js.map