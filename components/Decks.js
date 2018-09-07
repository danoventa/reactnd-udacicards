import React, { Component } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {getDecks} from "../utils/helpers";
import {lightPurp, pink, white, purple, gray, red} from "../utils/colors";

class Decks extends Component {
    state = {
        decks: {},
    };

    componentDidMount () {
        const decks = getDecks();
        this.setState(() => ({decks}));
    }
    render() {
        const { navigation } = this.props;
        const { decks } = this.state;

        return (
            <View>
                {Object.keys(decks).map((deck) => {
                    return (
                        <View key={deck}>
                            <TouchableOpacity
                                style={[styles.deckItems]}
                                onPress={() => navigation.navigate(
                                    'Deck',
                                    {
                                        deckId: `${deck}-${decks[deck].title}`,
                                        deck: decks[deck],
                                    }
                                )}
                            >
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={styles.deckItemText} >
                                        {decks[deck].title}
                                    </Text>
                                    <Text style={styles.deckSubText}>
                                        {decks[deck].questions.length} CARDS
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
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