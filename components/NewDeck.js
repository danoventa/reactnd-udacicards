import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {lightPurp, purple, white} from "../utils/colors";
import {saveDeckTitle} from "../utils/helpers";
import { NavigationActions } from 'react-navigation'


class NewDeck extends Component {
    state = {
        title: ''
    };

    _updatedDeck = NavigationActions.setParams({
        update: true,
        key: 'Decks',
    });

    _setNewDeck = async () => {
        await saveDeckTitle(this.state.title).then(() => {
                this.setState({
                    title: '',
                });

            const setParamsAction = NavigationActions.setParams({
                params: { title: 'Some Value From Tab1' },
                key: 'Decks',
            });

            this.props.navigation.dispatch(this._updatedDeck, setParamsAction);
            this.props.navigation.navigate('Decks', {update: true});
            }
        );

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>New Deck Name?</Text>
                <View style={{paddingTop: 20}}>
                    <TextInput
                        style={styles.userInput}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                    />
                </View>
                <View style={styles.submitDeck}>
                    <TouchableOpacity
                        onPress={this._setNewDeck}>
                        <Text style={styles.submitDeckText}>
                            Submit New Question
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default NewDeck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    headerText: {
        color: purple,
        fontSize: 20,
    },
    submitDeck: {
        paddingTop: 160,
    },
    submitDeckText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        backgroundColor: purple,
        padding: 5,
        color: white,
    },
    userInput: {
        color: lightPurp,
        padding: 6,
        width: 300,
        height: 50,
        borderColor: 'white',
        borderWidth: 2,
    }
});