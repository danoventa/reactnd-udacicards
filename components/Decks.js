import React, { Component } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {getDecks} from "../utils/helpers";
import {lightPurp, pink, white} from "../utils/colors";

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
                                <View>
                                    <Text style={styles.deckItemText} >
                                        {JSON.stringify(decks[deck].title)}
                                    </Text>
                                    <Text>
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
        backgroundColor: lightPurp,
        paddingTop: 20,
        paddingBottom: 20
    },
    deckItemText: {
        alignItems: 'center',
        color: white,
        fontSize: 20,
    }
});