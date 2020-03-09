const diceArray = [];

class Die {
    constructor() {
        diceArray.push(this);
        this.div = $(`<div class='die'></div>`);
        this.roll();
        this.div.append('container');
        this.div.click(() => {
            this.roll();
            this.val();
        })
        this.div.dblclick(() => {
            this.erase();
            diceArray.splice(diceArray.indexOf(this),1);
        })


    }
    roll() {
        this.face = Math.floor(Math.random() * 6) + 1;
        this.div.text(this.face);
    }
    erase() {
        remove(this);
        indexOf(diceArray);
        diceArray.splice(1)

        

    }
}
    
diceArray.indexOf(this);
diceArray.splice();
new Die();
new Die();
new Die();
new Die();
new Die();
new Die();

$('gen-die').click(() => {
    diceArray.forEach((eachDie) => {
        console.log('newFace', eachDie.face);
        eachDie.roll();
        console.log('nextFace', eachDie.face);
});

})