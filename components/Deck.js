import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {purple} from "../utils/colors";

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params;
        return {
            title: deck.title
        }
    };

    render() {
        const { navigation } = this.props;
        const { deckId, deck } = navigation.state.params;

        const deckCount = Object.keys(deck).length;

        return (
            <View style={[styles.deck, {alignContent: 'center'}]}>
                <Text style={styles.deckText}>{deck.title}</Text>
                <Text>{deckCount} cards</Text>

                <Text onPress={() => navigation.navigate(
                    'Quiz',
                    {
                        questions: deck.questions,
                    }
                )}>START QUIZ</Text>

                <Text onPress={() => navigation.navigate(
                    'NewQuestion',
                    {
                        deckId: deckId,
                    }
                )}>Add Card</Text>
            </View>
        )
    }
}

export default Deck;

const styles = StyleSheet.create({
    deck : {
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
    deckText: {
        color: purple,
        fontSize: 30,
    }
});