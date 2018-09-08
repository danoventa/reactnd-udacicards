import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    RefreshControl,
} from 'react-native';
import {getDecks} from "../utils/helpers";
import {lightPurp, white, purple } from "../utils/colors";

class Decks extends Component {
    state = {
        decks: {},
        refreshing: false,
        update: false,
    };

    _onRefresh = async () => {
        this.setState({refreshing: true});
        await this.getDecks().then(() => {
            this.setState({refreshing: false});
        });
    };

    componentDidMount = async () =>  await this.getDecks();

    getDecks = async () => {
        await getDecks().then((json) => {
            this.setState(() => {
                    const rawDecks = JSON.parse(json);
                    const decks = Object.keys(rawDecks).map((deck) => rawDecks[deck]);

                    return {
                        decks: Object.keys(decks).map((deck) => {
                            return {[deck]: decks[deck]}
                        })
                    }
                }
            );
    })};

    _keyExtractor = (deck, index) => {
        return Object.keys(deck)[0];
    };

    _renderItem = ({index, item}) => {
        const deckObj = item[index];

        return <TouchableOpacity
            style={[styles.deckItems]}
            onPress={() => this.props.navigation.navigate(
                'Deck',
                {
                    deckId: `${index}-${deckObj.title}`,
                    deck: deckObj,
                    returnDecks: this.getDecks.bind(this),
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

    componentWillReceiveProps(nextProps) {
        const { params } = nextProps.navigation.state;

        this.setState({
            decks: this.getDecks(),
        })
    }

    render() {
        const {decks} = this.state;

        return (
            <View>
                {
                    decks && Object.keys(decks).length > 0 &&
                    <FlatList
                        data={decks}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
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
        textAlign: 'center',
        fontSize: 20,
    }, 
    deckSubText: {
        color: lightPurp,
        textAlign: 'center',
    }
});