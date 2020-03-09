const diceArray = [];

class Die {
    constructor() {
        diceArray.push(this);
        this.div = $(`div class='die'></div>`);
        this.face = this.roll();
        this.div.append('container');

        


    }
    roll() {
        this.face = Math.floor(Math.random() * 6) + 1;
        this.div.text(this.face);
    }
}
    
diceArray.indexOf();
diceArray.splice();
new Die();
new Die();
new Die();
new Die();
new Die();
new Die();

