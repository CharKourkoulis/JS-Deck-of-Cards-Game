
const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['hearts', 'diamonds', 'spades', 'clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initializeDeck() {
          const {suits, values, deck} = this;
         for (const value of values.split(',')) {
             for (const suit of suits) {
                 deck.push({value, suit})
             }
         }
        },
        drawCard(){
            const card = this.deck.pop();
            this.drawCard.push(card);
            return card;
        },
        drawMultiple(numCards){
            const cards = [];
            for (let i = 0; i < numCards; i++) {
                cards.push(this.drawCard());        
            }
            return cards;
        },
        shuffle() {
            const {deck} = this;
          //loop over array backwards
          for (let i = deck.length - 1; i > 0; i--) {
              //pick random index before current element
              let j = Math.floor(Math.random() * (i + 1));
              //swap
              [deck[i], deck[j]] = [deck[j], deck[i]];
              console.log(deck);
          }
      }
    }
}


const firstDeck = makeDeck();
firstDeck.initializeDeck();
firstDeck.shuffle();