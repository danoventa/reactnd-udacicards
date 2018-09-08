import React, {Component} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native'
import {purple, white, orange, pink, lightPurp, } from "../utils/colors";

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params;
        return {
            title: deck.title
        }
    };

    componentDidMount = async () =>  {
        const {deck} = this.props.navigation.state.params;

        this.setState({
            deck,
            questionsCount: this.getQuestionCount(deck),
        });
    };

    returnDeck = (deck) => {
        this.props.navigation.state.params.returnDecks();

        this.setState({
            deck,
            questionsCount: this.getQuestionCount(deck),
        });
    };

    getQuestionCount = (deck) => Object.keys(deck.questions).length;

    state = {
        deck: {},
        questionsCount: []
    };

    render() {
        const { navigation } = this.props;
        const { deck } = navigation.state.params;

        return (
            <View style={styles.deck}>
                <Text style={styles.deckText}>{deck.title}</Text>
                <Text style={{color: lightPurp}}>{this.state.questionsCount} cards</Text>
                <TouchableOpacity
                    style={[styles.startQuiz]}
                    onPress={() => navigation.navigate(
                        'Quiz',
                        {
                            questions: deck.questions,
                        })}>
                    <Text style={styles.startQuizText} >
                        Start Quiz
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addCard}
                    onPress={() => navigation.navigate(
                    'NewQuestion',
                        {
                            deck,
                            returnDeck: this.returnDeck.bind(this),
                        })}>
                    <Text style={styles.addCardText} >
                        Add Card
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Deck;

const styles = StyleSheet.create({
    deck : {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
    deckText: {
        color: purple,
        fontSize: 30,
    },
    startQuiz: {
        paddingTop: 50,
    },
    startQuizText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        backgroundColor: white,
        padding: 10,
        color: purple,
    },
    addCard: {
        paddingTop: 20,
    },
    addCardText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        backgroundColor: purple,
        padding: 10,
        color: white,
    },
});