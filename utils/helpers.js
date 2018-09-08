import { AsyncStorage } from 'react-native';
import Decks from "../components/Decks";

const DECKS_KEY = 'udacicards:decks';

// getDecks: return all of the decks along with their titles, questions, and answers.
export async function getDecks() {

    let result = await AsyncStorage.getItem(DECKS_KEY);

    if(result === null) {
        await AsyncStorage.setItem(DECKS_KEY, JSON.stringify({}));
        result = await AsyncStorage.getItem(DECKS_KEY);
    }

    return result;
}

// getDeck: take in a single id argument and return the deck associated with that id.
export async function getDeck(deckTitle){

    const mockDeck = {
        React: {
            title: 'React',
                questions: [
                {
                    question: deckTitle,
                    answer: 'A library for managing user interfaces'
                }
            ]
        }}['React'];

    return JSON.stringify(mockDeck);
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
export async function addCardToDeck (deckTitle, card) {
    const jsonDecks = await AsyncStorage.getItem(DECKS_KEY);
    const decks = JSON.parse(jsonDecks);

    const updatedDecks = {
        ...decks,
        [deckTitle]: {
            ...decks[deckTitle],
            questions: [...decks[deckTitle].questions, card],
        }
    };

    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(updatedDecks));

    return updatedDecks[deckTitle];
}
