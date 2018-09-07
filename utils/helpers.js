import { AsyncStorage } from 'react-native';
import Decks from "../components/Decks";

const DECKS_KEY = 'udacicards:decks';

// getDecks: return all of the decks along with their titles, questions, and answers.
export async function getDecks() {

    let result = await AsyncStorage.getItem(DECKS_KEY);
    // await AsyncStorage.clear();

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
        }
    };

    if(result === null) {
        await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(mockDecks));
        result = await AsyncStorage.getItem(DECKS_KEY);
    }

    return result;
}

// getDeck: take in a single id argument and return the deck associated with that id.
export async function getDeck(deckId){

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
export async function saveDeckTitle (title){

    const jsonDecks = await AsyncStorage.getItem(DECKS_KEY);
    const decks = JSON.parse(jsonDecks);


    let newDeck = {
        ...decks,
        [title]: {
            title,
            questions: [],
        }
    };

    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDeck));
}

// addCardToDeck: take in two arguments, title and card, and will add the card to
export async function addDeckToCard (deckTitle, card){
    return decks[deck].append(card);
}

function makeNewDeck(){}

function makeNewQuestion(){}

