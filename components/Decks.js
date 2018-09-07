import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import {getDecks} from "../utils/helpers";
import {lightPurp, pink, white, purple, gray, red} from "../utils/colors";

class Decks extends Component {
    state = {
        decks: {},
    };

    componentDidMount () {
        const rawDecks = getDecks();

        const decks = Object.keys(rawDecks).map((deck) => {
            return {[deck]: rawDecks[deck]}
        });
        this.setState(() => ({decks}));
    }

    _keyExtractor = (deck, index) => {
        return Object.keys(deck)[0];
    };

    _renderItem = (deck) => {
        const index = deck.index;
        const deckObj = deck.item[index];

        return <TouchableOpacity
            style={[styles.deckItems]}
            onPress={() => this.props.navigation.navigate(
                'Deck',
                {
                    deckId: `${index}-${deckObj.title}`,
                    deck: deckObj,
                }
            )}>
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.deckItemText} >
                    {deckObj.title}
                </Text>
                <Text style={styles.deckSubText}>
                    {Object.keys(deckObj.questions).length} CARDS
                </Text>
            </View>
        </TouchableOpacity>
    };

    render() {
        const { decks } = this.state;
        console.log("Just work! ");
        console.log(decks && Object.keys(decks).length > 0);

        return (
            <View>
                {
                    decks && Object.keys(decks).length > 0 &&
                    <FlatList
                        data={decks}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                }
            </View>
        )
    }
}

export default Decks;

const styles = StyleSheet.create({
    deckItems: {
        marginTop: 2,
        alignItems: 'center',
        backgroundColor: purple,
        paddingTop: 20,
        paddingBottom: 20
    },
    deckItemText: {
        color: white,
        fontSize: 20,
    }, 
    deckSubText: {
        color: lightPurp,
        textAlign: 'center',
    }
});