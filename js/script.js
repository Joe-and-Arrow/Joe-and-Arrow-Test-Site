var sayMyName = function (name) {
    alert("My name is " + name);
}

var oBow =
{
    strength: 5,
    type: 'Elvin',
    color: 'brown',
    isPulledBack: false,
    numberOfStrings: 1,
    typesOfArrows:
        [
            'fire',
            'ice',
            'electric',
            'exlosive'
        ],

    pullBack: function () {
        this.isPulledBack = true;
        alert("Pulled back Bow")
    },

    shootArrow: function () {
        if (this.isPulledBack == true) {
            this.isPulledBack = false;
            console.log("Shot any arrow somewhere..")
        }
        else {
            alert("The archer almost shot something, but they forgot to pull back their bow.");
        }
    },

    shootUser: function () {
        if (this.isPulledBack == true) {
            alert("You've been shot!");
            this.shootArrow()
        }
        else {
            alert("You almost got shot, but the mercenary forgot to pull back their bow.");
        }
    },

    shootIceArrow: function ()
    {
        if (this.isPulledBack == true) {
            this.shootArrow()
            alert("You've been shot by an ice arrow!")
        }
        else {
            alert("You almost got shot, but the mercenary forgot to pull back their bow.")
        }
    }
}