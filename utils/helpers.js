import { AsyncStorage } from 'react-native';
import Decks from "../components/Decks";

const DECKS_KEY = 'udacicards:decks';

// getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks() {


    // insted of mock, get fro async storage
    const mockDecks = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                },
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        },
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }
            ]
        },
        JavafScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                },
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        },     Raeact: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }
            ]
        },
        JavaScfript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                },
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        },     Resact: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }
            ]
        },
        JavaScridpt: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                },
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        },Raea3ct: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }
            ]
        },
        JavaScfri5pt: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                },
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        },     Res1ct: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }
            ]
        },
        Java4Scridpt: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                },
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    };

    return Object.keys(mockDecks).map((deck) => mockDecks[deck]);
}

//return AsyncStorage.getItem(AsyncStorage)
//   .then(formatCalendarResults);

// return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//    [key]: entry
//}))

// getDeck: take in a single id argument and return the deck associated with that id.
export function getDeck(deckId){
    // async storage, get getItem(Decks)[deckId]

    const mockDeck = {
        React: {
            title: 'React',
                questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }
            ]
        }}['React'];

    return mockDeck;
}


// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle (title){
    // Set async storage with new deck object.
    const newDeck = {
        ...getDecks(),
        [title]: {
            title,
            questions: []
        }
    }

    // return {
       //  ...decks,
        // new deck
    // }
}

// addCardToDeck: take in two arguments, title and card, and will add the card to
export function addDeckToCard (deckTitle, card){
    return decks[deck].append(card);
}

function makeNewDeck(){}

function makeNewQuestion(){}

