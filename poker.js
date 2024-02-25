class Card {
  constructor(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
  }
}
class Deck {
  constructor() {
    this.cards = [];
    this.names = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    this.suits = ["Hearts", "Spades", "Aces", "Diamonds"];

    for (let s = 0; s < this.suits.length; s++) {
      for (let n = 0; n < this.names.length; n++) {
        let value = n + 2;
        this.cards.push(new Card(value, this.names[n], this.suits[s]));
      }
    }
    parseInt(this.cards.value);
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const s = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[s]] = [this.cards[s], this.cards[i]];
    }
    // return this.cards;
  }

  reset() {
    this.cards = [];
    this.shuffle();
    Player.hand = [];
  }
}

let deck1 = new Deck();

class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.hand = [];

    //get 5 cards from deck into hand
  }

  deal() {
    for (let i = 0; i < 5; i++) {
      this.hand.push(deck1.cards.pop());
    }
    const handValue = this.hand.reduce(
      (totalValue, card) => totalValue + card.value,
      0
    );
    console.log(`Value: ${handValue}`);
    console.log(this.hand);
  }

  toss(index1, index2) {
    //prompt in console
    if (
      this.hand.length === 5 &&
      index1 >= 0 &&
      index2 >= 0 &&
      index1 < this.hand.length &&
      index2 < this.hand.length &&
      index1 !== index2
    ) {
      this.hand.splice(index1, 1);
      this.hand.splice(index2 < index1 ? index2 : index2 - 1, 1);
      this.hand.push(deck1.cards.pop());
      this.hand.push(deck1.cards.pop());
      const handValue = this.hand.reduce(
        (totalValue, card) => totalValue + card.value,
        0
      );
      console.log(`Value: ${handValue}`);
    } else {
      console.log("Invalid number of cards in hand or cards not found");
    }
  }
}
let Slim = new Player();
let Jim = new Player();

deck1.shuffle();
Slim.deal();
console.log(deck1.cards);
Slim.toss(0, 3); 
console.log(deck1.cards);
console.log(Slim.hand);
deck1.reset();
console.log(deck1.cards);
