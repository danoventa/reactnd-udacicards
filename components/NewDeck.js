import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {lightPurp, purple, white} from "../utils/colors";

class NewDeck extends Component {
    state = {
        title: ''
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
                <Text>{this.state.title}</Text>
                <View style={styles.submitDeck}>
                    <TouchableOpacity
                        onPress={() => {
                        }}>
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