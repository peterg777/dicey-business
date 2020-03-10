const diceArray = [];

class Die {
    constructor() {
        diceArray.push(this);
        this.div = $(`<div class='die'></div>`);
        this.roll();
        $('#container').append(this.div);
        this.div.click(() => {
            this.roll();

        })
        this.div.dblclick(() => {
            this.erase();
            diceArray.splice(diceArray.indexOf(this), 1);
        })


    }
    roll() {
        this.face = Math.floor(Math.random() * 6) + 1;
        this.div.text(this.face);
    }
    erase() {
        this.div.remove();

    }

}


$('#getDie').click(() => {
    new Die();


})

$('#rollDie').click(() => {
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i].value = diceArray[i].roll();
    }
})


$('#sumDie').click(() => {
    let total = 0;
    for (let i = 0; i < diceArray.length; i++) {
        total += diceArray[i].face;
    }
    alert('the sum of all die add up to ' + total);



})

